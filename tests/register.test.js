import { expect, test } from '@playwright/test';
test.beforeEach(async ({ page }, testInfo) => {
	console.log(`Running ${testInfo.title}`);
	await page.goto('/register');
});

test('Register page : vérification globale', async ({ page }) => {
	expect(await page.title()).toBe('ThéTipTop - Inscription');

	const header = page.locator('header');
	expect(await header.isVisible()).toBeTruthy();
	const footer = page.locator('footer');
	expect(await footer.isVisible()).toBeTruthy();
});

test('Test de validation champ prenom ', async ({ page }) => {
	await page.locator('#floatingFirstName').click();
	await page.locator('#floatingFirstName').fill('aa');

	const labelSelector = 'label[for="floatingFirstName"]';
	const expectedText = 'Le prénom doit contenir entre 3 et 50 caractères.';

	await page.waitForSelector(labelSelector);
	const labelElement = await page.$(labelSelector);
	if (labelElement !== null) {
		const labelText = await labelElement.textContent();
		expect(labelText).toContain(expectedText);
	} else {
		throw new Error(`Unable to find label element using selector ${labelSelector}`);
	}
});
test('Test de validation champ nom ', async ({ page }) => {
	await page.locator('#floatingLastName').click();
	await page.locator('#floatingLastName').fill('aa');

	const labelSelector = 'label[for="floatingLastName"]';
	const expectedText = 'Le nom doit contenir entre 3 et 50 caractères.';

	await page.waitForSelector(labelSelector);
	const labelElement = await page.$(labelSelector);
	if (labelElement !== null) {
		const labelText = await labelElement.textContent();
		expect(labelText).toContain(expectedText);
	} else {
		throw new Error(`Unable to find label element using selector ${labelSelector}`);
	}
});
test('Test de validation champ email ', async ({ page }) => {
	await page.locator('#floatingEmail').click();
	await page.locator('#floatingEmail').fill('aaa.com');

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
});
test('Test de validation champ password ', async ({ page }) => {
	await page.locator('#floatingPassword').click();
	await page.locator('#floatingPassword').fill('azerty');

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
});

test('Création de compte avec succès', async ({ page }) => {
	// Interception des appels réseau
	await page.route('http://localhost:8080/auth/register', (route, request) => {
		console.log(`Intercepted request to ${request.url()}`);
		const mockResponse = { status: 'Success', errors: null };
		route.fulfill({
			status: 200,
			contentType: 'application/json',
			body: JSON.stringify(mockResponse)
		});
	});

	await page.waitForTimeout(500);
	await page.getByPlaceholder('Prénom').click();
	await page.getByPlaceholder('Prénom').fill('foo');
	await page.locator('#floatingLastName').click();
	await page.locator('#floatingLastName').fill('Doe');

	await page.locator('#floatingEmail').click();
	await page.locator('#floatingEmail').fill('mail@exemple.fr');

	await page.locator('#floatingPassword').click();
	await page.locator('#floatingPassword').fill('Azerty@123');
	await page.locator('#floatingConfirmPassword').click();
	await page.locator('#floatingConfirmPassword').fill('Azerty@123');

	await page.locator('#acceptRgpd-checkbox').click();
	await page.locator('#acceptNewsLetter-checkbox').click();

	await page.getByRole('button', { name: "S'inscrire" }).click();

	await expect(page).toHaveURL(/.*\/login/);

	await page.pause();
});
