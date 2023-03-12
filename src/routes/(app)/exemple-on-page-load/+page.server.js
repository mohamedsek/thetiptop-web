import { apiClient } from '$services/apiClient';

/** @type {import('./$types').PageLoad} */
export const load = async ({ locals, parent }) => {
	await parent();
	const response = await apiClient.get(`${import.meta.env.VITE_API_BASE_URL}/hello`, {
		token: locals.accessToken
	});
	return {
		a: 1,
		b: 2,
		greetingMessage: response.greeting
	};
};
