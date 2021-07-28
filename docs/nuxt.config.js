import { resolve } from "path";
import theme from "@nuxt/content-theme-docs";

export default theme({
  env: {},
  alias: {
    svg: resolve(__dirname, "./assets/svg"),
  },
  buildModules: ["@nuxtjs/tailwindcss"],
});
