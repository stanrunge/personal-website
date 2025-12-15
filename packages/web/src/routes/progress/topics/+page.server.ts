import { db } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const topics = await db.query.topics.findMany({
		with: {
			topicsToTasks: {
				with: {
					task: true
				}
			}
		}
	});

	topics.sort((a, b) => b.topicsToTasks.length - a.topicsToTasks.length);

	return {
		topics
	};
};
