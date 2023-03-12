

import gainService from '$lib/services/gainService';

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
    let data = await parent();

    const userGains = await gainService.getUserGains(data.accessToken);
    
    return {
        userGains
    }
}


