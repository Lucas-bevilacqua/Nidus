import { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-for-dev';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { email },
            include: {
                partnerships: {
                    include: {
                        project: true
                    }
                }
            }
        });

        if (!user || !user.passwordHash) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        const passwordMatch = await bcrypt.compare(password, user.passwordHash);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        const token = jwt.sign(
            { userId: user.id, role: user.role },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        // Filter user to return without hash
        const { passwordHash, ...userWithoutHash } = user;

        return res.status(200).json({
            token,
            user: userWithoutHash
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
