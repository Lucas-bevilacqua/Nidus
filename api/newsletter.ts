
import { PrismaClient } from '@prisma/client';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const prisma = new PrismaClient();

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const subscription = await prisma.newsletter.create({
            data: { email },
        });

        return res.status(200).json({ success: true, subscription });
    } catch (error: any) {
        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'Email já cadastrado.' });
        }
        console.error('Newsletter error', error);
        return res.status(500).json({ error: 'Erro ao cadastrar e-mail', details: String(error) });
    }
}
