import Database from 'better-sqlite3';
import path from 'path';

// Resolve path relative to project root
const DB_PATH = path.join(process.cwd(), 'lacafeine.db');

let db;

export function getDb() {
    if (!db) {
        db = new Database(DB_PATH, { readonly: true });
    }
    return db;
}

// ── Launches ──────────────────────────────────────────────
export function getLaunches() {
    const stmt = getDb().prepare(
        'SELECT * FROM launches WHERE is_active = 1 ORDER BY launch_date ASC'
    );
    return stmt.all();
}

// ── Menu / Beverages ──────────────────────────────────────
export function getMenu() {
    const stmt = getDb().prepare('SELECT * FROM menu ORDER BY id ASC');
    return stmt.all();
}

export function getBeverages() {
    const stmt = getDb().prepare('SELECT * FROM beverages ORDER BY id ASC');
    return stmt.all();
}

// ── Franchise Leads ───────────────────────────────────────
export function insertFranchiseLead(data) {
    const writeDb = new Database(DB_PATH);
    const stmt = writeDb.prepare(
        `INSERT INTO franchise_leads (name, email, phone, city, budget, message)
         VALUES (@name, @email, @phone, @city, @budget, @message)`
    );
    const result = stmt.run(data);
    writeDb.close();
    return result;
}

// ── Knowledge Base (for chat) ─────────────────────────────
export function getKnowledgeBase() {
    const stmt = getDb().prepare('SELECT * FROM knowledge_base ORDER BY id ASC');
    return stmt.all();
}

// ── Careers ───────────────────────────────────────────────
export function getCareersJobs() {
    const stmt = getDb().prepare('SELECT * FROM careers_jobs ORDER BY id ASC');
    return stmt.all();
}
