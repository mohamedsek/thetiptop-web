import { addCookie } from '$services/cookieUtils';
import { redirect } from '@sveltejs/kit';


// todo extract maxAge and cookie name to env variable
const SESSION_COOKIE_NAME = 'ttt_session'

/** @type {import('./$types').RequestHandler} */
export async function GET({ request, url, cookies }) {
	addCookie(cookies, SESSION_COOKIE_NAME, '', 0);
	throw redirect(302, '/');
}
