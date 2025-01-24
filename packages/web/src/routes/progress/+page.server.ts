import { db } from '$lib/db';

export const load = async ({ cookies }) => {
	return {
		tasks: await db.query.tasks.findMany({
			with: {
				tasksToTopics: {
					with: {
						topic: true
					}
				}
			}
		}),
		editable: cookies.get('token')
	};
};
