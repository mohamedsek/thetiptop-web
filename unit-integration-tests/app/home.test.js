import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import HomePage from '$src/routes/(app)/+page.svelte';
import gainsMock from '$src/lib/mocks/gainsMock';

describe("HomePage tests", () => {

    it('Should load Home page with child components', () => {
        const homePage = render(HomePage, { props: { data: { gains: gainsMock } } });

        expect(homePage).toBeTruthy();
    })
})

