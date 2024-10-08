import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { websocket } from "./src/lib/sockets/webSocket";

export default defineConfig({
	server: {
		port: 4000,
		fs: {
			allow: [".."]
		}
	},
	preview: {
		port: 4000
	},
	plugins: [sveltekit(), websocket]
});
