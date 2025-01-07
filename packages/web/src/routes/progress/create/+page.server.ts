import { db, tasks } from "$lib/db/schema"
import { redirect } from "@sveltejs/kit"

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData()

		await db.insert(tasks).values({ name: data.get('name') })

		redirect(303, '/progress')
	}
}
