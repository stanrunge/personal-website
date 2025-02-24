import { db } from "$lib/db"
import { tasks } from "$lib/db/schema"
import { redirect } from "@sveltejs/kit"

export const actions = {
	default: async ({ cookies, request }) => {
		if (!cookies.get('token')) {
			return { status: 401 };
		}

		const data = await request.formData()

		const task = await db.insert(tasks).values({ name: data.get('name') }).returning()

		redirect(303, '/progress/' + task[0].id)
	}
}
