import { db, tasks } from "$lib/db/schema"

export const load = async () => {
	return {
		tasks: await db.select().from(tasks)
	}
}
