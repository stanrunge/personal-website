import * as schema from './schema'
import { drizzle } from 'drizzle-orm/postgres-js';
import { DB_URL } from '$env/static/private';
import postgres from 'postgres';

const client = postgres(DB_URL);
export const db = drizzle({
	schema,
	client
});


