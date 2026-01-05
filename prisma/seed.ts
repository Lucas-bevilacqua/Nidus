import { prisma } from '../lib/db';
import bcrypt from 'bcryptjs';

async function main() {
    const adminEmail = 'admin@nidus.ventures';
    const adminPassword = 'nidus-admin-2026';

    console.log('Seed: Start...');
    try {
        console.log('Seed: Hashing password...');
        const hashedPassword = await bcrypt.hash(adminPassword, 10);

        // 1. Create Admin
        console.log('Seed: Querying user...');
        const admin = await prisma.user.upsert({
            where: { email: adminEmail },
            update: {
                passwordHash: hashedPassword,
                role: 'ADMIN',
                name: 'Nidus Admin'
            },
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
            where: { id: 'kopilot-unit-id' },
            update: {},
            create: {
                id: 'kopilot-unit-id',
                name: 'Kopilot',
                description: 'Gestão de Equipes Externas + Roteirização + IA de Voz.',
                ticketValue: 197.00
            }
        });
        console.log('Seed: Project created:', kopilot.name);
    } catch (error: any) {
        console.error('--- SEED ERROR DETAIL ---');
        console.error('Message:', error.message);
        console.error('Stack:', error.stack);
        if (error.code) console.error('Code:', error.code);
        throw error;
    }

    console.log('Seed: Success!');
}

main()
    .catch((e) => {
        // Log is already done in catch block above
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
