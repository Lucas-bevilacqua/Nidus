
import { PrismaClient } from '@prisma/client';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const prisma = new PrismaClient();

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required' });
    }

    try {
        const lead = await prisma.lead.create({
            data: {
                name,
                email,
                message: message || '',
            },
        });

        return res.status(200).json({ success: true, lead });
    } catch (error) {
        console.error('Request error', error);
        return res.status(500).json({ error: 'Error creating lead', details: String(error) });
    }
}
