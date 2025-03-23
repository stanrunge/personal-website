import { env } from '$env/dynamic/private';
import * as schema from './schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(env.DB_URL, { prepare: false });
export const db = drizzle({
	schema,
	client
});
