// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        server: {
            allowedHosts: ['viewer-only-varied.ngrok-free.dev']
        }
    }
});
