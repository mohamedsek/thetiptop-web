import { describe, expect, it} from 'vitest';
import { render } from '@testing-library/svelte';
import JackpotPage from '$src/routes/(backoffice)/backoffice/jackpot/+page.svelte';

describe("JackpotPage tests", () => {

    it('Should load jackpot page with child components', () => {
        const jackpotPage = render(JackpotPage, { props: { data : null }});

        expect(jackpotPage).toBeTruthy();
    })
})



