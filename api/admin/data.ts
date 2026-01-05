import { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-for-dev';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // 1. Auth check
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'No token' });
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { role: string };
        if (decoded.role !== 'ADMIN') return res.status(403).json({ error: 'Forbidden' });
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }

    try {
        const partners = await prisma.user.findMany({
            where: { role: 'OPERATOR' },
            include: {
                partnerships: {
                    include: { project: true }
                }
            }
        });

        const units = await prisma.project.findMany();

        const stats = {
            totalMrr: partners.reduce((acc, p) => acc + p.partnerships.reduce((pa, part) => pa + (part.currentMRR || 0), 0), 0),
            activePartners: partners.length,
            totalUnits: units.length
        };

        return res.status(200).json({ partners, units, stats });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}
