import { addCookie } from '$services/cookieUtils';
import { redirect } from '@sveltejs/kit';


// todo extract maxAge and cookie name to env variable
const SESSION_COOKIE_NAME = 'ttt_session'
const SESSION_COOKIE_AGE = 60 * 30;

/** @type {import('./$types').RequestHandler} */
export async function GET({ request, url, cookies }) {
	let token = url.searchParams.get("token")
	if (token) {
		addCookie(cookies, SESSION_COOKIE_NAME, token, SESSION_COOKIE_AGE);
	} else {
		throw redirect(302, '/auth/logout');
	}
	throw redirect(302, '/');
}

//   const { a, b } = await request.json();
	// return json(import.meta.env.VITE_API_BASE_URL);

// export async function GET({ request }) {
// 	//   const { a, b } = await request.json();
// 	throw redirect(302, '/');
// }
