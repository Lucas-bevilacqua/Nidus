import { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../../lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'nidus-super-secret-key-2026';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    // 1. Verify if requester is Admin
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'No token' });

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { role: string };
        if (decoded.role !== 'ADMIN') return res.status(403).json({ error: 'Forbidden' });
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }

    const { name, email, password, projectId } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                passwordHash: hashedPassword,
                role: 'OPERATOR',
                partnerships: projectId ? {
                    create: {
                        projectId: projectId,
                        currentEquity: 10.0 // Default Blueprint
                    }
                } : undefined
            }
        });

        return res.status(201).json({ success: true, userId: user.id });
    } catch (error: any) {
        if (error.code === 'P2002') return res.status(400).json({ error: 'Email já cadastrado' });
        return res.status(500).json({ error: 'Internal server error' });
    }
}
