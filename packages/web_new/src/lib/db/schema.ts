import { integer, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

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

export const courses = pgTable('courses', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }),
	universityId: integer('university_id').references(() => universities.id),
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

export const books = pgTable('books', {
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
