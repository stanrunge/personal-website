import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'postgresql',
	schema: './src/lib/db/schema.ts',
	out: './drizzle',
	verbose: true,
	strict: true,
	dbCredentials: {
		host: 'vash-db.c0n0e8svjact.eu-west-1.rds.amazonaws.com',
		user: 'vash',
		password: '-Gl(WO[45ISyqW6R7vy3DMY2x1a|',
		database: 'personal-website-db',
		port: 5432,
	}
});
