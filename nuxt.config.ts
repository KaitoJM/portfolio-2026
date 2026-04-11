// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxt/eslint", "@nuxt/ui", "@vercel/analytics"],

  runtimeConfig: {
    blogIds: import.meta.env.BLOG_IDS ?? import.meta.env.BLOG_ID ?? "",
  },

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
