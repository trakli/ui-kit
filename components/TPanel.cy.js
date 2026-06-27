import TPanel from './TPanel.vue';

describe('TPanel', () => {
  it('renders header, body and footer slots', () => {
    cy.mount(TPanel, {
      props: { variant: 'raised' },
      slots: {
        header: () => 'Title',
        default: () => 'Body',
        footer: () => 'Footer',
      },
    });
    cy.get('.t-panel').should('have.class', 't-panel--raised');
    cy.get('.t-panel__header').should('contain.text', 'Title');
    cy.get('.t-panel__footer').should('contain.text', 'Footer');
    cy.get('.t-panel').should('contain.text', 'Body');
  });

  it('omits header and footer when their slots are absent', () => {
    cy.mount(TPanel, { slots: { default: () => 'Only body' } });
    cy.get('.t-panel__header').should('not.exist');
    cy.get('.t-panel__footer').should('not.exist');
  });
});
