// Trakli UI Kit — Nuxt layer.
// Consumed by a host app via `extends`, e.g.
//   export default defineNuxtConfig({ extends: ['github:trakli/ui-kit'] })
// Components in `components/` are auto-imported into the host with the same names.
export default defineNuxtConfig({
  components: [
    { path: './components', pathPrefix: false },
  ],
})
