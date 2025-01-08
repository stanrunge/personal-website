import { topics } from "./schema"
import * as schema from './schema'
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres('postgresql://postgres:postgres@localhost:5432/db');
const db = drizzle(client, { schema });

db.insert(topics).values([{ name: 'Math', emoji: '👍' }, { name: 'Programming', emoji: '👍' }])

