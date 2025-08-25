import { db } from '$lib/db';
import { topics } from '$lib/db/schema';
import { eq } from 'drizzle-orm';

export const load = async ({ params }) => {
	return {
		topics: await db.query.topics.findMany({
			with: {
				topicsToTasks: {
					with: {
						task: true
					}
				}
			}
		})
	};
};
