import { db } from '$lib/db';
import { topics } from '$lib/db/schema';
import { eq } from 'drizzle-orm';

export const load = async ({ params }) => {
	return {
		topic: await db.query.topics.findFirst({
			with: {
				topicsToTasks: {
					with: {
						task: true
					}
				}
			},
			where: eq(topics.id, params.id)
		})
	};
};
