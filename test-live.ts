async function test() {
    const url = 'https://nidus-blond.vercel.app/api/auth/login';
    const body = {
        email: 'admin@nidus.ventures',
        password: 'nidus-admin-2026'
    };

    try {
        console.log('Fetching live login...');
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        const data = await res.json();
        console.log('Status:', res.status);
        console.log('Response Body:', JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('Fetch error:', err);
    }
}

test();
