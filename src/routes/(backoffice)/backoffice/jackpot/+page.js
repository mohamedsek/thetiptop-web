
import backOfficeService from '$lib/services/backOfficeService';

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
    let data = await parent();

    const JackPot = await backOfficeService.getJackPot(data.accessToken, {});
    
    return {
        JackPot
    }
}