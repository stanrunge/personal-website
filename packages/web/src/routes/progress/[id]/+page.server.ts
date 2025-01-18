import { db } from "$lib/db"
import { tasks, tasksToTopics } from "$lib/db/schema"
import { eq } from "drizzle-orm"

export const load = async ({ params }) => {
	return {
		task: (await db.query.tasks.findFirst({
			with: {
				tasksToTopics: {
					with: {
						topic: true
					}
				}
			},
			where: eq(tasks.id, params.id)

		})
		),
		topics: await db.query.topics.findMany()
	}
}

export const actions = {
	addTopic: async ({ request, params }) => {
		const data = await request.formData()

		const task = await db.insert(tasksToTopics).values({ taskId: params.id, topicId: data.get('topic-id') }).returning()
	}
}
