import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'postgresql',
	schema: './src/lib/db/schema.ts',
	out: './drizzle',
	verbose: true,
	strict: true,
	dbCredentials: {
		url: 'postgresql://postgres:postgres@localhost:5432/db'
	}
});
