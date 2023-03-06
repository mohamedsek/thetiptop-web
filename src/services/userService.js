import { apiClient } from '$services/apiClient';

export const fetchUserInfo = async (baseUrl, token) => {
	const response = await apiClient.get(`${baseUrl}/api/auth/userinfo`, { token });
	return response;
};

export const redirectTo = async () => {
	window.location.href = '/';
};
