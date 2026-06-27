// Default token values so components are themed in isolation.
import '../assets/css/tokens.css';

// NuxtLink is provided by Nuxt at runtime. Outside Nuxt (Storybook), register a
// minimal stand-in so components that render links still mount.
import { setup } from '@storybook/vue3';
import { h } from 'vue';

setup((app) => {
  app.component('NuxtLink', {
    props: { to: { type: [String, Object], default: '#' } },
    setup(props, { slots }) {
      return () => h('a', { href: typeof props.to === 'string' ? props.to : '#' }, slots.default?.());
    },
  });
});

/** @type { import('@storybook/vue3').Preview } */
export default {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    layout: 'centered',
  },
};
