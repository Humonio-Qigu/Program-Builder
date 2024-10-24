// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "shadcn-nuxt",
  ],
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
  eslint: {
    checker: true,
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
      },
    },
  },
  googleFonts: {
    families: {
      Montserrat: {
        wght: "100..900",
        ital: "100..900",
      },
    },
  },
  i18n: {
    vueI18n: "i18n.config.ts",
    locales: ["fr"],
    defaultLocale: "fr",
  },
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.scss", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: false,
    viewer: true,
  },
});