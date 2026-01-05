import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function test() {
    try {
        console.log('Testing connection...');
        await prisma.$connect();
        console.log('Connected successfully!');
        const users = await prisma.user.findMany();
        console.log('Users found:', users.length);
    } catch (err: any) {
        console.error('Connection failed!');
        console.error('Code:', err.code);
        console.error('Message:', err.message);
    } finally {
        await prisma.$disconnect();
    }
}

test();
