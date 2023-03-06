import { SESSION_COOKIE_NAME } from '$services/cookieUtils';
import { fetchUserInfo } from '$services/userService';

export const handle = async ({ event, resolve }) => {
	const { cookies } = event;
	const token = cookies.get(SESSION_COOKIE_NAME);
	if (token) {
		const baseUrl = event.url.origin;
		event.locals.user = await fetchUserInfo(baseUrl, token);
	}
	const response = await resolve(event);
	return response;
};
