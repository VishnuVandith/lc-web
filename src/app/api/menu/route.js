import Database from 'better-sqlite3';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const model = searchParams.get('model') || 'Urban Kiosk';

    try {
        const db = new Database('lacafeine.db', { readonly: true });
        
        const stmt = db.prepare(`
            SELECT category, title, description, price
            FROM menu
            WHERE model = ? AND active = 1
            ORDER BY category, title
        `);
        
        const rows = stmt.all(model);
        db.close();

        return new Response(JSON.stringify(rows), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Database Error:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch menu' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
