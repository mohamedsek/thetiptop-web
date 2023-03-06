// import { dev } from '$app/environment';

// // we don't need any JS on this page, though we'll load
// // it in dev so that we get hot module replacement
// export const csr = dev;

// // since there's no dynamic data here, we can prerender
// // it so that it gets served as a static asset in production
// export const prerender = true;
import { apiClient } from '$services/apiClient';
import { addCookie, SESSION_COOKIE_AGE, SESSION_COOKIE_NAME } from '$services/cookieUtils';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	// load;
	if (locals?.user) {
		throw redirect(303, '/');
	}
};

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request, url }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		const { accessToken } = await apiClient.post(`${url.origin}/api/auth/login`, {
			payload: { email: email, password: password }
		});
		addCookie(cookies, SESSION_COOKIE_NAME, accessToken, SESSION_COOKIE_AGE);
		return { success: true };
	}
};
