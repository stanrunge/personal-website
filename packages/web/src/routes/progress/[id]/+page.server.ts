import { db } from '$lib/db';
import { tasks, tasksToTopics, topics } from '$lib/db/schema';
import { eq, and } from 'drizzle-orm';

export const load = async ({ params }) => {
	return {
		task: await db.query.tasks.findFirst({
			with: {
				tasksToTopics: {
					with: {
						topic: true
					}
				}
			},
			where: eq(tasks.id, params.id)
		}),
		topics: await db.query.topics.findMany()
	};
};

export const actions = {
	createTopic: async ({ request, params }) => {
		const data = await request.formData();

		const topic = await db
			.insert(topics)
			.values({ name: data.get('name') })
			.returning();

		const existing = await db.query.tasksToTopics.findFirst({
			where: and(
				eq(tasksToTopics.taskId, Number(params.id)),
				eq(tasksToTopics.topicId, topic[0].id)
			)
		});

		if (!existing) {
			await db
				.insert(tasksToTopics)
				.values({ taskId: Number(params.id), topicId: topic[0].id })
				.returning();
		}
	},
	addTopic: async ({ request, params }) => {
		const data = await request.formData();

		const topicId = Number(data.get('topic-id'));

		const existing = await db.query.tasksToTopics.findFirst({
			where: and(eq(tasksToTopics.taskId, Number(params.id)), eq(tasksToTopics.topicId, topicId))
		});

		console.log(existing);

		if (!existing) {
			await db
				.insert(tasksToTopics)
				.values({ taskId: Number(params.id), topicId })
				.returning();
		}
	}
};
