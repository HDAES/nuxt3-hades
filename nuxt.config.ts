import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  css: ["@/assets/css/main.css"],
  extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx"],
  modules: ["@vueuse/nuxt", "nuxt-windicss"],

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Damion&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://at.alicdn.com/t/font_1098415_6lewpvb5fgd.css",
        },
      ],
    },
  },
});
