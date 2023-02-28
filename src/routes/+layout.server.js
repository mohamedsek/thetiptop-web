import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	// if (!locals.user) {
	// 	console.log('Access Denied');
	// 	throw redirect(303, '/');
	// }

	return {
		user: locals.user,
	};
};
