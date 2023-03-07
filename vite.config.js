import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd());

	return defineConfig({
		plugins: [sveltekit()],
		resolve: {
			alias: {
				$src: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
				$services: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src', 'services')
			}
		},
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}'],
			reporters:'junit',
			outputFile: './unit-test-results/junit.xml',
			watch: false
		}
	});
};
