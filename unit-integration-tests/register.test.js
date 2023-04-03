import {beforeEach, describe, expect, it} from 'vitest';
import { render } from '@testing-library/svelte';
import RegisterPage from '../src/routes/(app)/register/+page.svelte';

describe("RegisterPage tests", () => {

    it('Should load register page with child components', () => {
        const registerPage = render(RegisterPage);

        expect(registerPage).toBeTruthy();
    })
})



