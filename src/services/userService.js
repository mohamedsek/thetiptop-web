import { apiClient } from '$services/apiClient';

export const fetchUserInfo = async (token) => {
	const response = await apiClient.get(`${import.meta.env.VITE_API_BASE_URL}/auth/userinfo`, { token });
	return response;
};

export const redirectTo = async () => {
	window.location.href = '/';
};
