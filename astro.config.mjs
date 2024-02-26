import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://izarmula.github.io',
  base: '/drills-landing-page',
  integrations: [tailwind()]
});