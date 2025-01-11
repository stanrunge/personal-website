import * as schema from './schema'
import { drizzle } from 'drizzle-orm/node-postgres';
import { DB_HOST, DB_USER, DB_PASSWORD } from '$env/static/private';

export const db = drizzle({
	schema,
	connection: {
		host: DB_HOST,
		user: DB_USER,
		password: DB_PASSWORD,
		database: 'personal-website-db',
		port: 5432,
		ssl: DB_HOST == 'db' ? false : {
			rejectUnauthorized: false
		}
	}
});


