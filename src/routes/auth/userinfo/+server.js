import apiClient from '$services/apiClient';
import { json } from '@sveltejs/kit';

const SESSION_COOKIE_NAME = 'ttt_session';

/** @type {import('./$types').RequestHandler} */
export async function GET({ request, url, cookies }) {
	const token = cookies.get(SESSION_COOKIE_NAME);
	if (token) {
		const response = await apiClient.get(`${url.origin}/api/auth/userinfo`, { token });
		return json(response);
	}
	return json({});
}
