import { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../../lib/db';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'nidus-super-secret-key-2026';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            include: {
                partnerships: {
                    include: {
                        project: true
                    }
                }
            }
        });

        if (!user) return res.status(404).json({ error: 'User not found' });

        const { passwordHash, ...userWithoutHash } = user;
        return res.status(200).json(userWithoutHash);
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}
