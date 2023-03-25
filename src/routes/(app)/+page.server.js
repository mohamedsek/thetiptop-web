// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

import { apiClient } from '$services/apiClient';
import gainsMock from '../../lib/mocks/gainsMock';


// export const prerender = true;
/** @type {import('./$types').PageLoad} */
export const load = async ({ locals, parent }) => {
	await parent();

	const gainsResult = getGains();

	return {
		gains: gainsResult
	};
};


async function getGains() {

	if (import.meta.env.VITE_API_BASE_URL) {
		return await apiClient.get(`${import.meta.env.VITE_API_BASE_URL}/gains`);
	}

	// when API_BASE_URL is empty we are in test mode
	return gainsMock;

}
