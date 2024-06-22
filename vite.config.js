import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import {sveltePreprocess} from 'svelte-preprocess';
import svelte_preprocess_markdown from "svelte-preprocess-markdown";

export default defineConfig({
    plugins: [
        svelte({
            preprocess: sveltePreprocess([
                svelte_preprocess_markdown,
            ]),
            extensions: ['.svelte', '.md']
        })
    ],
    server: {
        port: 3000
    },
    build: {
        rollupOptions: {
            input: '/src/main.ts'
        }
    }
});
