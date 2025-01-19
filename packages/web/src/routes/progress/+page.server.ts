import { db } from '$lib/db';

export const load = async ({ cookies }) => {
	return {
		tasks: await db.query.tasks.findMany(),
		editable: cookies.get('token')
	};
};
