export const load = async ({ locals, request, url }) => {
	return {
		user: locals.user,
		accessToken: locals.accessToken
	};
};
