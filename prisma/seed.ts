import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const adminEmail = 'admin@nidus.ventures';
    const adminPassword = 'nidus-admin-2026'; // USER can change later
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    console.log('Seed: Start...');

    // 1. Create Admin
    const admin = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {},
        create: {
            email: adminEmail,
            name: 'Nidus Admin',
            passwordHash: hashedPassword,
            role: 'ADMIN'
        }
    });
    console.log('Seed: Admin created:', admin.email);

    // 2. Create Initial Project (Kopilot)
    const kopilot = await prisma.project.upsert({
        where: { id: 'kopilot-unit-id' }, // Stable ID for seeding
        update: {},
        create: {
            id: 'kopilot-unit-id',
            name: 'Kopilot',
            description: 'Gestão de Equipes Externas + Roteirização + IA de Voz.',
            ticketValue: 197.00
        }
    });
    console.log('Seed: Project created:', kopilot.name);

    console.log('Seed: Success! Use credentials:');
    console.log('Email:', adminEmail);
    console.log('Pass:', adminPassword);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
