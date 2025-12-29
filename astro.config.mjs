import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    integrations: [react(), tailwind()],
    server: {
        host: true,
        port: 3000
    },
    adapter: undefined, // We will rely on Node/Vite for dev/docker
    devToolbar: {
        enabled: false
    }
});
