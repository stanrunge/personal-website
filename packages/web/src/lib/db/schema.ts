import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres('postgresql://postgres:postgres@db:5432/db');
export const db = drizzle(client, {});

export const tasks = pgTable('tasks', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow()
});

export const tasksRelations = relations(tasks, ({ many }) => ({
	tasksToTopics: many(tasksToTopics)
}))

export const topics = pgTable('topics', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }),
	emoji: varchar('emoji', { length: 256 }),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow()
});

export const topicsRelations = relations(topics, ({ many }) => ({
	topicsToTasks: many(tasksToTopics)
}));

export const tasksToTopics = pgTable('tasks_to_topics', {
	taskId: integer('task_id')
		.notNull()
		.references(() => tasks.id),
	topicId: integer('topic_id')
		.notNull()
		.references(() => topics.id)
})

export const taskToTopicsRelations = relations(tasksToTopics, ({ one }) => ({
	task: one(tasks, {
		fields: [tasksToTopics.taskId],
		references: [tasks.id]
	}),
	topic: one(topics, {
		fields: [tasksToTopics.topicId],
		references: [topics.id]
	})
}));

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

