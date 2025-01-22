import * as schema from './schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(process.env.DB_URL, { prepare: false });
export const db = drizzle({
	schema,
	client
});
