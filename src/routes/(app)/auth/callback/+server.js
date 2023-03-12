import { addCookie, SESSION_COOKIE_AGE, SESSION_COOKIE_NAME } from '$services/cookieUtils';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ request, url, cookies, locals }) {
	let token = url.searchParams.get('token');
	if (token) {
		addCookie(cookies, SESSION_COOKIE_NAME, token, SESSION_COOKIE_AGE);
		throw redirect(303, '/');
	} else {
		throw redirect(302, '/auth/logout');
	}
}
