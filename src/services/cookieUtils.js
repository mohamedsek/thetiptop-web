const addCookie = (cookies, name, value, age) => {
	cookies.set(name, value, {
		path: '/',
		httpOnly: true,
		sameSite: 'Lax',
		secure: true,
		maxAge: age
	});
};

// todo extract maxAge and cookie name to env variable
const SESSION_COOKIE_NAME = 'ttt_session';
const SESSION_COOKIE_AGE = 60 * 30;

export { addCookie, SESSION_COOKIE_NAME, SESSION_COOKIE_AGE };
