import { auth } from '../routes/store';
import { parse } from 'cookie';

const SESSION_COOKIE_NAME = 'ttt_session'


export const fetchUserInfo = () => {
    const cookies = parse(document.cookie);
    let token = cookies[SESSION_COOKIE_NAME]
    if (token) {
        // fetch vers backend with jwt token
        return { firstName: "soukaina", email: "sk@gmail.com" };
    }
    return null;
}

export const authenticate = () => {
    console.log("Attempt to authenticate");
    const userInfo = fetchUserInfo();
    if (userInfo) {
        auth.update(oldValue => {
            return {
                ...oldValue,
                isLoggedIn: true,
                user: userInfo
            };
        })
    }
}