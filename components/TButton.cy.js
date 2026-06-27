import TButton from './TButton.vue';

describe('TButton', () => {
  it('renders its text and variant/size classes', () => {
    cy.mount(TButton, { props: { text: 'Save', variant: 'outline', size: 'large', fullWidth: false } });
    cy.get('button')
      .should('contain.text', 'Save')
      .and('have.class', 'button--outline')
      .and('have.class', 'button--large');
  });

  it('emits a click', () => {
    const onClick = cy.stub().as('click');
    cy.mount(TButton, { props: { text: 'Click', fullWidth: false }, attrs: { onClick } });
    cy.get('button').click();
    cy.get('@click').should('have.been.calledOnce');
  });

  it('shows a spinner and disables while loading', () => {
    cy.mount(TButton, { props: { text: 'Saving', loading: true, fullWidth: false } });
    cy.get('button').should('be.disabled');
    cy.get('button .spinner').should('exist');
  });

  it('renders an anchor when given a destination', () => {
    cy.mount(TButton, { props: { text: 'Go', to: '/destination', fullWidth: false } });
    cy.get('a').should('have.attr', 'href', '/destination').and('contain.text', 'Go');
    cy.get('button').should('not.exist');
  });
});
