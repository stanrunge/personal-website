import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'postgresql',
	schema: './src/lib/db/schema.ts',
	out: './drizzle',
	verbose: true,
	strict: true,
	dbCredentials: {
		url: process.env.DB_URL
	},
	schemaFilter: 'personal_website'
});
