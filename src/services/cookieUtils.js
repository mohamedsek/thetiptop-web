const addCookie = (cookies, name, value, age) => {
	cookies.set(name, value, {
		path: '/',
		httpOnly: true,
		sameSite: 'Lax',
		secure: true,
		maxAge: age
	});
};

const SESSION_COOKIE_NAME = import.meta.env.VITE_COOKIE_NAME;
const SESSION_COOKIE_AGE = import.meta.env.VITE_COOKIE_MAX_AGE;

export { addCookie, SESSION_COOKIE_NAME, SESSION_COOKIE_AGE };
