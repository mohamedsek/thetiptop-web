import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$src: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
			$services: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src', 'services')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		watch: false
	}
};

export default config;
