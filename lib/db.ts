import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    // For local dev, we might still want dotenv
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
