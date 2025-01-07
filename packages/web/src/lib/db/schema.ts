import { integer, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres('postgresql://postgres:postgres@db:5432/db');
export const db = drizzle(client, {});

export const topics = pgTable('topics', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }),
	emoji: varchar('emoji', { length: 256 }),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow()
});

export const universities = pgTable('universities', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }),
	progress: integer('progress').default(0),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow()
});

export const certificates = pgTable('certificates', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }),
	progress: integer('progress').default(0),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow()
});

export const publications = pgTable('publications', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow()
});

export const tasks = pgTable('topics', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow()
});


