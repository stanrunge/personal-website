import { db, tasks } from "$lib/db/schema"
import { eq } from "drizzle-orm"

export const load = async ({ params }) => {
	return {
		task: (await db.select().from(tasks).where(eq(tasks.id, params.id)))[0]
	}
}
