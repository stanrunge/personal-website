import { relations } from 'drizzle-orm';
import { integer, pgSchema, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const personalWebsiteSchema = pgSchema('personal_website')

export const tasks = personalWebsiteSchema.table('tasks', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }),
	currentPoints: integer('current_points').default(0),
	totalPoints: integer('total_points').default(1),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow()
});

export const tasksRelations = relations(tasks, ({ many }) => ({
	tasksToTopics: many(tasksToTopics)
}))

export const topics = personalWebsiteSchema.table('topics', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }),
	emoji: varchar('emoji', { length: 256 }),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow()
});

export const topicsRelations = relations(topics, ({ many }) => ({
	topicsToTasks: many(tasksToTopics)
}));

export const tasksToTopics = personalWebsiteSchema.table('tasks_to_topics', {
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

export const universities = personalWebsiteSchema.table('universities', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }),
	progress: integer('progress').default(0),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow()
});

export const certificates = personalWebsiteSchema.table('certificates', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }),
	progress: integer('progress').default(0),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow()
});

export const publications = personalWebsiteSchema.table('publications', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow()
});

