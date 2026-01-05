import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pkg from 'pg';
const { Pool } = pkg;

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    const connectionString = process.env.DATABASE_URL;
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    prisma = new PrismaClient({ adapter });
} else {
    // For local dev
    try {
        const dotenv = await import('dotenv');
        dotenv.config();
    } catch (e) { }

    if (!(global as any).prisma) {
        (global as any).prisma = new PrismaClient();
    }
    prisma = (global as any).prisma;
}

export { prisma };
