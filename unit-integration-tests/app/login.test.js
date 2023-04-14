import {beforeEach, describe, expect, it} from 'vitest';
import { render } from '@testing-library/svelte';
import LoginPage from '$src/routes/(app)/login/+page.svelte';

describe("LoginPage tests", () => {

    it('Should load home page with child components', () => {
        const loginPage = render(LoginPage);

        expect(loginPage).toBeTruthy();
    })
})



