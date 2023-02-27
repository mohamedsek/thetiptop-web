import {apiClient} from '$services/apiClient';
import { auth } from '../routes/store';

export const fetchUserInfo = async (data) => {
	const response = await apiClient.get('/auth/userinfo');
	return response;
};

export const authenticate = async () => {
	const userInfo = await fetchUserInfo();
	if (userInfo && userInfo.email) {
		auth.update((oldValue) => {
			return {
				...oldValue,
				isLoggedIn: true,
				user: userInfo
			};
		});
	}
	return userInfo;
};

export const redirectTo = async () => {
	const userInfo = await fetchUserInfo();
	window.location.href = '/?aa';
};
