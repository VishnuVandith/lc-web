import { getLaunches } from '@/lib/db';

export async function GET() {
    try {
        const launches = getLaunches();
        return Response.json({ launches });
    } catch (error) {
        console.error('Error fetching launches:', error);
        return Response.json({ error: 'Failed to fetch launches' }, { status: 500 });
    }
}
