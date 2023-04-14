import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import StatsPage from '$src/routes/(backoffice)/backoffice/stats/+page.svelte';
import stats from '$lib/mocks/statsMock.js';

describe("StatsPage tests", () => {

    it('Should load stats page with child components', () => {
        const statsPage = render(StatsPage, { props: { data: { GainStats: stats } } });

        expect(statsPage).toBeTruthy();
    })
})



