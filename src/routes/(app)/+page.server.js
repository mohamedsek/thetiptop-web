// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

import { apiClient } from '$services/apiClient';

// export const prerender = true;
/** @type {import('./$types').PageLoad} */
export const load = async ({ locals, parent }) => {
	await parent();

	const response = await apiClient.get(`${import.meta.env.VITE_API_BASE_URL}/gains`);

	return {
		gains: response
	};
};
