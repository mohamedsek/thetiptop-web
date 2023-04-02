import {apiClient} from '$services/apiClient';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const _getUserGains = async (accessToken, email) => {
    let userGainsRes = await apiClient.get(
        `${baseUrl}/tickets/usergains?email=${email}`,
        {token: accessToken}
    );

    if (userGainsRes) {
        return userGainsRes;
    }
    return [];
}

const _getCode = async (accessToken, payload) => {
    let userGainsRes = await apiClient.post(
        `${baseUrl}/tickets`,
        {token: accessToken, payload: payload }
    );

    if (userGainsRes) {
        return userGainsRes;
    }
    return [];
}

const caisseService = {
    getUserGains: _getUserGains,
    getCode: _getCode
};

export default caisseService;
