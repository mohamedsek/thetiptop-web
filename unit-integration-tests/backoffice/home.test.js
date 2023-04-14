import { describe, expect, it} from 'vitest';
import { render } from '@testing-library/svelte';
import HomePage from '$src/routes/(backoffice)/backoffice/+page.svelte';

describe("HomePage tests", () => {

    it('Should load backoffice home page with child components', () => {
        const homePage = render(HomePage);

        expect(homePage).toBeTruthy();
    })
})



