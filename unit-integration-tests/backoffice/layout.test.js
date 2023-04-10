import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import LayoutPage from '$src/routes/(backoffice)/+layout.svelte';

describe("Layout tests", () => {

    it('Should load Layout page with child components', () => {
        const layoutPage = render(LayoutPage, { props: { data: null } });

        expect(layoutPage).toBeTruthy();
    })
})



