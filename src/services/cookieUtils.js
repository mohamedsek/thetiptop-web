const addCookie = (cookies, name, value, age) => {
    cookies.set(name, value, {
        path: '/',
        httpOnly: false,
        sameSite: 'strict',
        secure: true,
        maxAge: age,
    });
}

const SESSION_COOKIE_NAME = 'ttt_session'


export { addCookie, SESSION_COOKIE_NAME };

