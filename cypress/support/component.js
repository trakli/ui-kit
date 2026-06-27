import { h } from 'vue';
import { mount } from 'cypress/vue';

// Default token values so mounted components are themed.
import '../../assets/css/tokens.css';

// NuxtLink stand-in for mounting outside Nuxt.
const NuxtLink = {
  name: 'NuxtLink',
  props: { to: { type: [String, Object], default: '#' } },
  setup(props, { slots }) {
    return () => h('a', { href: typeof props.to === 'string' ? props.to : '#' }, slots.default?.());
  },
};

Cypress.Commands.add('mount', (component, options = {}) => {
  options.global = options.global || {};
  options.global.components = { NuxtLink, ...(options.global.components || {}) };
  return mount(component, options);
});
