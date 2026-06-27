import TTabs from './TTabs.vue';

const tabs = [
  { id: 'one', label: 'One', icon: 'span' },
  { id: 'two', label: 'Two', icon: 'span' },
];

describe('TTabs', () => {
  it('marks the active tab and renders its panel', () => {
    cy.mount(TTabs, {
      props: { tabs, activeTab: 'one' },
      slots: { one: () => 'Panel one', two: () => 'Panel two' },
    });
    cy.contains('.tab-btn', 'One').should('have.class', 'active');
    cy.get('.tabs-content').should('contain.text', 'Panel one');
  });

  it('emits update:activeTab when another tab is clicked', () => {
    const onUpdate = cy.stub().as('update');
    cy.mount(TTabs, {
      props: { tabs, activeTab: 'one', 'onUpdate:activeTab': onUpdate },
      slots: { one: () => 'Panel one', two: () => 'Panel two' },
    });
    cy.contains('.tab-btn', 'Two').click();
    cy.get('@update').should('have.been.calledWith', 'two');
  });
});
