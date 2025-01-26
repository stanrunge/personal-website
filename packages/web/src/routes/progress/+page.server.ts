import { db } from '$lib/db';
import { tasks } from '$lib/db/schema.js';
import { desc } from 'drizzle-orm';

export const load = async ({ cookies }) => {
	return {
		tasks: await db.query.tasks.findMany({
			with: {
				tasksToTopics: {
					with: {
						topic: true
					}
				}
			},
			orderBy: [desc(tasks.updatedAt)]
		}),
		editable: cookies.get('token')
	};
};
