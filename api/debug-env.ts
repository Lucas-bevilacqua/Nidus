import { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../lib/db';
import pkg from 'pg';
const { Client } = pkg;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const dbUrl = process.env.DATABASE_URL;
    const directUrl = process.env.DIRECT_URL;
    const jwtSecret = process.env.JWT_SECRET;
    const nodeEnv = process.env.NODE_ENV;

    let pgTest = 'Not attempted';
    try {
        const client = new Client({
            connectionString: dbUrl,
            ssl: { rejectUnauthorized: false }
        });
        await client.connect();
        const resPg = await client.query('SELECT NOW()');
        pgTest = `Success: ${resPg.rows[0].now}`;
        await client.end();
    } catch (e: any) {
        pgTest = `Error: ${e.message}`;
    }

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
            pgTest,
            queryTest,
            processCwd: process.cwd(),
            timestamp: new Date().toISOString()
        }
    });
}
