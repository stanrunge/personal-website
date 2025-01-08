import { db } from "$lib/db"

export const load = async () => {
	return {
		tasks: await db.query.tasks.findMany()
	}
}
