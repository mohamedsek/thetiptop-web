import { apiClient } from '$services/apiClient';
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const _getGainStats = async (accessToken) => {
    let gainStats = await apiClient.get(
        `${baseUrl}/gains/stats`,
        { token: accessToken }
    );

    if (gainStats) {
        return gainStats;
    }
    return [];
}

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
    getGainStats: _getGainStats,
    getJackPot: _getJackPot
};

export default backOfficeService;