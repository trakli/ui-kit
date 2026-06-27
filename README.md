# @trakli/ui-kit

Shared Trakli UI primitives, distributed as a Nuxt layer. Consume it straight from GitHub today; npm publishing comes later.

This repo also serves as the reference shape for plugin client-UI layers in the plugin-UI extensibility architecture: a plugin that needs custom frontend ships a thin Nuxt layer exactly like this one.

## Consume

In the host app's `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  extends: ['github:trakli/ui-kit'],
})
```

The components are auto-imported into the host with their original names (`TButton`, `TCard`, ...), so usage is unchanged:

```vue
<template>
  <TCard>
    <TButton text="Save" variant="primary" @click="save" />
  </TCard>
</template>
```

Peer dependencies (provided by the host): `vue`, `nuxt`, `sass`, `lucide-vue-next`, `@heroicons/vue`.

## Theming contract

Components never hardcode colours. They read SCSS variables that resolve to CSS custom properties (`--color-primary`, spacing, radius, elevation, ...). `assets/scss/_tokens.scss` ships sensible light and dark defaults under `:root` and `:root.dark`.

A host themes the kit by overriding those custom properties in its own global stylesheet. Override only what you need:

```scss
:root {
  --color-primary: #047844;
  --color-primary-rgb: 4, 120, 68;
}
```

Because the kit's SCSS variables point at the custom properties, an override flows through every component automatically. No SCSS recompilation of the kit is required.

## Components

Included (zero coupling to any app composable, router, or i18n):

- `TButton`, `TCard`, `TTabs`, `TDropdown`, `TDropdownItem`, `TInfoButton`

Deferred (need decoupling before they can move): components bound to app state, routing, theme, or translation (for example `TNavbar`, `TSidebar`, `TAvatar`, `TTopCard`, `ThemeToggleButton`). These move once their i18n strings and behaviour are lifted into props or peer composables.

## Status

Seed release. The host app still owns its in-app copies; switching the host to consume this layer is a separate, later step.
