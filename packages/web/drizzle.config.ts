import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'postgresql',
	schema: './src/lib/db/schema.ts',
	out: './drizzle',
	verbose: true,
	strict: true,
	dbCredentials: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: 'personal_website',
		port: 5432,
		ssl: process.env.DB_HOST == 'db' ? false : {
			rejectUnauthorized: false
		}
	}
});
