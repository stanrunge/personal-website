import * as schema from './schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import { DB_URL } from '$env/static/private';
import postgres from 'postgres';

console.log('DB_URL', DB_URL);
const client = postgres(DB_URL, { prepare: false });
export const db = drizzle({
	schema,
	client
});
