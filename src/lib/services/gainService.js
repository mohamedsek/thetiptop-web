import { apiClient } from '$services/apiClient';
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const _getUserGains = async (accessToken) => {
    // TODO impelment
    return [];
}

const _participate = async (accessToken, ticketCode) => {
    let askForGainRes = await apiClient.post(
        `${baseUrl}/tickets/gain`,
        { token: accessToken, payload: ticketCode }
    );
    if (askForGainRes) {
        return true;
    }
    return false;
}

const gainService = {
    getUserGains: _getUserGains,
    participate: _participate
};

export default gainService;
