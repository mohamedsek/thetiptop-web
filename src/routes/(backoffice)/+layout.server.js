import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, request, url }) => {
	if (locals?.user) {
		if (locals.user.role.name === 'ADMIN') {

		} else {
			throw redirect(302,'/')
		}
	} else {
		throw redirect(302,'/login')
	}

	return {
		user: locals.user,
		accessToken: locals.accessToken
	};
};
