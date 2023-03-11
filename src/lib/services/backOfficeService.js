import { apiClient } from '$services/apiClient';
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const _getJackPot = async (accessToken, payload) => {
    let JackPot = await apiClient.post(
        `${baseUrl}/tickets/jackpot`,
        { token: accessToken, payload: payload }
    );
    if (JackPot) {
        return JackPot;
    }
    return [];
}

const backOfficeService = {
    getJackPot: _getJackPot
};

export default backOfficeService;
