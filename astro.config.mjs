import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: "5f3g5jjg",
      dataset: "production",
      apiVersion: "2022-11-04",
      useCdn: false,
    }),
  ],
});
