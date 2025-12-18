
import { PrismaClient } from '@prisma/client';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Debug logging
    console.log('API Lead handler called');
    console.log('Method:', req.method);
    console.log('DATABASE_URL present:', !!process.env.DATABASE_URL); // Don't log the full secret

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
