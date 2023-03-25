async function fetchAPI(url, method = 'GET', { payload, accept, token } = {}) {
	if (!accept) {
		accept = 'application/json';
	}
	let headers = {
		'Content-Type': 'application/json',
		Accept: accept,
		Authorization: `Bearer ${token}`
	};

	const res = await fetch(url, {
		method: method,
		headers: headers,
		body: payload ? JSON.stringify(payload) : null
	});

	return await res;
}

export const apiClient = {
	get: async (url, data) => {
		url;
		return (await fetchAPI(url, 'GET', data)).json();
	},
	post: async (url, data) => {
		return (await fetchAPI(url, 'POST', data)).json();
	},
	put: async (url, data) => {
		return (await fetchAPI(url, 'PUT', data)).json();
	},
	delete: async (url, data) => {
		return await fetchAPI(url, 'DELETE', data);
	},
	patch: async (url, data) => {
		return (await fetchAPI(url, 'PATCH', data)).json();
	},
	postWithRedirect: async (url, data) => {
		return await fetchAPI(url, 'POST', data);
	}
};
