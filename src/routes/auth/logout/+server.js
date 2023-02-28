import { addCookie, SESSION_COOKIE_NAME } from '$services/cookieUtils';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ request, url, cookies }) {
	addCookie(cookies, SESSION_COOKIE_NAME, '', 0);
	throw redirect(302, '/');
}
