import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [preact({
    compat: true
  }), image({
    serviceEntryPoint: '@astrojs/image/sharp'
})],
  server: {
    port: 8080
  },
  output: "server",
});