import { SESSION_COOKIE_NAME } from '$services/cookieUtils';
import { fetchUserInfo } from '$services/userService';

export const handle = async ({ event, resolve }) => {
	const { cookies } = event;
	const token = cookies.get(SESSION_COOKIE_NAME);
	if (token) {
		event.locals.user = await fetchUserInfo(token);
		event.locals.accessToken = token;
	}
	const response = await resolve(event);
	return response;
};
