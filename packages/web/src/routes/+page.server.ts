// import { myTable, db } from '$lib/db/schema';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	// const result = await db.select().from(myTable);
	return {
		message: 'Hi :4888829383991292222244343434'
	};
}) satisfies PageServerLoad;
