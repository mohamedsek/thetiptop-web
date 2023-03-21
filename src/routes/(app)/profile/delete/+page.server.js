import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load = async ({ locals, parent }) => {
	await parent();
	if (!locals.user) {
		throw redirect(302, '/login');
	}
   
};
