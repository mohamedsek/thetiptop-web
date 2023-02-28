import { apiClient } from '$services/apiClient';
import { SESSION_COOKIE_NAME } from '$services/cookieUtils';

export const fetchUserInfo = async (baseUrl, token) => {
	const response = await apiClient.get(`${baseUrl}/api/auth/userinfo`, { token });
	return response;
};

export const redirectTo = async () => {
	window.location.href = '/';
};

export const authenticateUser = async (event) => {
	const { cookies } = event;
	const token = cookies.get(SESSION_COOKIE_NAME);
	const userInfo = await fetchUserInfo(event.url.origin, token);
	return userInfo;
};
