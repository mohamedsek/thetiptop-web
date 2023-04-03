import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
	console.log(`Running ${testInfo.title}`);
	await page.goto('/');
});

test('should have a header element', async ({ page }) => {
	const header = await page.locator('header');
	expect(await header.isVisible()).toBeTruthy();
  });


test('should display the Home Page', async ({ page }) => {
	// Verify page title

	expect(await page.title()).toBe('ThéTipTop - Accueil');
	expect(await page.$eval('meta[name="description"]', (el) => el.content)).toBe(
		'ThéTipTop - Découvrez nos gammes de thés de très grande qualité, élaborées avec des mélanges signatures exclusifs, des thés détox, des thés blancs, des thés aux légumes et des infusions. Tous nos thés sont bios et Handmades. Savourez une expérience de dégustation unique avec ThéTipTop.'
	);
});
test('should load the main image', async ({ page }) => {
	const image = await page.$('img[alt="thé"]');
	expect(image).not.toBeNull();
  });

test('should display the correct title for the game', async ({ page }) => {
	const h1Element = await page.$('h1');
	expect(h1Element).toBeTruthy();
	const h1Text = await h1Element.textContent();
	expect(h1Text).toContain('ThéTipTop organise un jeu-concours');
});

test('should display the section text', async ({ page }) => {
	await expect(page.locator('.gray-text')).toHaveText("Le jeu-concours est 100% gagnant, pour participer : Inscrivez vous Entrez votre code de ticket Retirez votre lot en magasin");
  });

test('should display the correct steps for the game', async ({ page }) => {
	const steps = await page.$$eval('.gray-text .liste-style li', (els) =>
		els.map((el) => el.textContent)
	);
	expect(steps).toEqual([
		'Inscrivez vous',
		'Entrez votre code de ticket',
		'Retirez votre lot en magasin'
	]);
});
test('should have a footer element', async ({ page }) => {
	const footer = await page.locator('footer');
	expect(await footer.isVisible()).toBeTruthy();
  });
