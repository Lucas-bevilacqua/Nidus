import { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../../lib/db';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'nidus-super-secret-key-2026';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    // 1. Admin Auth
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'No token' });
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { role: string };
        if (decoded.role !== 'ADMIN') return res.status(403).json({ error: 'Forbidden' });
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }

    const { partnershipId, newMRR, newClients } = req.body;

    try {
        // 2. Blueprint Logic: MRR to Equity Acceleration
        // Meta 1 (20k): 20%
        // Meta 2 (50k): 30%
        // Super (100k): 35%
        let calculatedEquity = 10.0;
        if (newMRR >= 100000) calculatedEquity = 35.0;
        else if (newMRR >= 50000) calculatedEquity = 30.0;
        else if (newMRR >= 20000) calculatedEquity = 20.0;

        const updated = await prisma.partnership.update({
            where: { id: partnershipId },
            data: {
                currentMRR: newMRR,
                totalActiveClients: newClients,
                currentEquity: calculatedEquity
            }
        });

        return res.status(200).json({ success: true, updated });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}
