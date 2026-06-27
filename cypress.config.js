import { defineConfig } from 'cypress';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  component: {
    specPattern: 'components/**/*.cy.js',
    supportFile: 'cypress/support/component.js',
    indexHtmlFile: 'cypress/support/component-index.html',
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfig: {
        plugins: [vue()],
      },
    },
  },
});
