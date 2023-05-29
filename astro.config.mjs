import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import image from '@astrojs/image';
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [preact({
    compat: true
  }), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap()],
  outDir: './dist',
  site: 'https://bwgutter.com',
  compressHTML: true,
  output: "hybrid",
  experimental: {
    hybridOutput: true,
  },
  adapter: node({
    mode: "standalone"
  })
});