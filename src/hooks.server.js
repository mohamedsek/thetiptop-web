import { authenticateUser } from '$services/userService';

export const handle = async ({ event, resolve }) => {
	event.locals.user = await authenticateUser(event);
	const response = await resolve(event);
	return response;
};
