import { h } from 'vue';
import TStack from './TStack.vue';

const children = () => [h('div', 'a'), h('div', 'b'), h('div', 'c')];

describe('TStack', () => {
  it('lays children out as a flex column by default', () => {
    cy.mount(TStack, { slots: { default: children } });
    cy.get('.t-stack')
      .should('have.class', 't-stack--vertical')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'column');
  });

  it('resolves a numeric gap step to rem', () => {
    cy.mount(TStack, { props: { direction: 'horizontal', gap: 4 }, slots: { default: children } });
    // step 4 -> 1rem -> 16px
    cy.get('.t-stack').should('have.css', 'gap', '16px').and('have.css', 'flex-direction', 'row');
  });

  it('passes through a raw CSS length gap', () => {
    cy.mount(TStack, { props: { gap: '20px' }, slots: { default: children } });
    cy.get('.t-stack').should('have.css', 'gap', '20px');
  });
});
