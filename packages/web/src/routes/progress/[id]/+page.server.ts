import { db } from "$lib/db"
import { tasksToTopics } from "$lib/db/schema"

export const load = async () => {
	return {
		task: (await db.query.tasks.findFirst({
			with: {
				tasksToTopics: {
					with: {
						topic: true
					}
				}
			}
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
