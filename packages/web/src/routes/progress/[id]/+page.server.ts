import { db } from '$lib/db';
import { tasks, tasksToTopics, topics } from '$lib/db/schema';
import { eq, and } from 'drizzle-orm';

export const load = async ({ cookies, params }) => {
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
		topics: await db.query.topics.findMany(),
		editable: cookies.get('token')
	};
};

export const actions = {
	createTopic: async ({ cookies, request, params }) => {
		if (!cookies.get('token')) {
			return { status: 401 };
		}



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
	addTopic: async ({ cookies, request, params }) => {
		if (!cookies.get('token')) {
			return { status: 401 };
		}

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
	},
	removeTopic: async ({ cookies, request, params }) => {
		if (!cookies.get('token')) {
			return { status: 401 };
		}

		const data = await request.formData();

		const topicId = Number(data.get('topic-id'));

		const existing = await db.query.tasksToTopics.findFirst({
			where: and(eq(tasksToTopics.taskId, Number(params.id)), eq(tasksToTopics.topicId, topicId))
		});

		if (existing) {
			await db
				.delete(tasksToTopics)
				.where(
					and(eq(tasksToTopics.taskId, Number(params.id)), eq(tasksToTopics.topicId, topicId))
				);
		}
	},
	updateProgress: async ({ cookies, request, params }) => {
		if (!cookies.get('token')) {
			return { status: 401 };
		}

		const data = await request.formData();

		await db
			.update(tasks)
			.set({
				currentPoints: Number(data.get('currentPoints')),
				totalPoints: Number(data.get('totalPoints')),
				updatedAt: new Date()
			})
			.where(eq(tasks.id, Number(params.id)));
	}
};
