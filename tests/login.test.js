import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
	console.log(`Running ${testInfo.title}`);
	await page.goto('/login');
});

test('Login page : vérification globale', async ({ page }) => {
	expect(await page.title()).toBe('ThéTipTop - Connexion');

	const header = page.locator('header');
	expect(await header.isVisible()).toBeTruthy();
	const footer = page.locator('footer');
	expect(await footer.isVisible()).toBeTruthy();

});

test('Validation Formulaire Login : Champ email', async ({ page }) => {
	await page.locator('#floatingEmail').click();
	await page.locator('#floatingEmail').fill('foo');

	const labelSelector = 'label[for="floatingEmail"]';
	const expectedText = "L'adresse email est invalide.";

	await page.waitForSelector(labelSelector);
	const labelElement = await page.$(labelSelector);
	if (labelElement !== null) {
		const labelText = await labelElement.textContent();
		expect(labelText).toContain(expectedText);
	} else {
		throw new Error(`Unable to find label element using selector ${labelSelector}`);
	}
	await page.pause();
});

test('Validation Formulaire Login : Champ mot de passe', async ({ page }) => {
	await page.locator('#floatingEmail').click();
	await page.locator('#floatingEmail').fill('valide@email.com');
	await page.locator('#floatingPassword').click();
	await page.locator('#floatingPassword').fill('foo');

	const labelSelector = 'label[for="floatingPassword"]';
	const expectedText = 'Le mot de passe doit contenir entre 8 et 64 caractères.';

	await page.waitForSelector(labelSelector);
	const labelElement = await page.$(labelSelector);
	if (labelElement !== null) {
		const labelText = await labelElement.textContent();
		expect(labelText).toContain(expectedText);
	} else {
		throw new Error(`Unable to find label element using selector ${labelSelector}`);
	}
	await page.pause();
});
