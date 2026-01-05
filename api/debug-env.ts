import { VercelRequest, VercelResponse } from '@vercel/node';
import pkg from 'pg';
const { Client } = pkg;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const dbUrl = process.env.DATABASE_URL;
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

    return res.status(200).json({
        diagnostics: {
            nodeEnv: process.env.NODE_ENV,
            hasDatabaseUrl: !!dbUrl,
            pgTest,
            timestamp: new Date().toISOString()
        }
    });
}
