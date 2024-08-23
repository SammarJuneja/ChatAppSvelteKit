import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { websocket } from './src/lib/webSocket';

export default defineConfig({
	server: {
		port: 4000
	},
	preview: {
		port: 4000
	},
	plugins: [sveltekit(), websocket]
});
