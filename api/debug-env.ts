import { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../lib/db';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const dbUrl = process.env.DATABASE_URL;
    const directUrl = process.env.DIRECT_URL;
    const jwtSecret = process.env.JWT_SECRET;
    const nodeEnv = process.env.NODE_ENV;

    let queryTest = 'Not attempted';
    try {
        const count = await prisma.user.count();
        queryTest = `Success: ${count} users found`;
    } catch (e: any) {
        queryTest = `Error: ${e.message}`;
    }

    return res.status(200).json({
        diagnostics: {
            nodeEnv,
            hasDatabaseUrl: !!dbUrl,
            databaseUrlPrefix: dbUrl ? dbUrl.split(':')[0] : null,
            hasDirectUrl: !!directUrl,
            hasJwtSecret: !!jwtSecret,
            queryTest,
            processCwd: process.cwd(),
            timestamp: new Date().toISOString()
        }
    });
}
