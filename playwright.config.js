/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	reporter: [
		['junit', { outputFile: './e2etests-results/junit.xml' }]
	]
};

export default config;
