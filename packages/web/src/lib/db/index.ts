import * as schema from './schema'
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres('postgresql://postgres:postgres@db:5432/db');
export const db = drizzle(client, { schema });


