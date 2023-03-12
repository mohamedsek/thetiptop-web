
import backOfficeService from '$lib/services/backOfficeService';

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
    let data = await parent();

    const GainStats = await backOfficeService.getGainStats(data.accessToken);
    
    return {
        GainStats
    }
}
