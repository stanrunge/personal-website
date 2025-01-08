import { db } from "$lib/db"

export const load = async () => {
	return {
		task: (await db.query.tasks.findFirst({
			with: {
				tasksToTopics: true
			}
		})
		)
	}
}
