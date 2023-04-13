import { beforeEach, describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import ParticiperPage from '$src/routes/(app)/participer/+page.svelte';
import userGainsMock from '$src/lib/mocks/userGainsMock';

describe("ParticiperPage tests", () => {

    it('Should load participation page with child components when empty user gains', () => {
        const participerPage = render(ParticiperPage, { props: { data: { userGains: [] } } });

        expect(participerPage).toBeTruthy();
    });


    it('Should load participation page with child components', () => {
        const participerPage = render(ParticiperPage, { props: { data: { userGains: userGainsMock } } });

        expect(participerPage).toBeTruthy();
    });
})



