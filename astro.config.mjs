import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://klrfl-countries.netlify.app",
  adapter: netlify(),
});

