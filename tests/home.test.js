import { expect, test } from '@playwright/test';

test('should display the Home Page', async ({ page }) => {
	// Verify page title
	await page.goto('/');
	expect(await page.title()).toBe("ThéTipTop - Accueil");
});
