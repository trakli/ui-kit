import { h } from 'vue';
import TDropdown from './TDropdown.vue';
import TDropdownItem from './TDropdownItem.vue';

const items = () => [
  h(TDropdownItem, () => 'Profile'),
  h(TDropdownItem, () => 'Sign out'),
];

describe('TDropdown', () => {
  it('opens on trigger click and closes on outside click', () => {
    cy.mount(TDropdown, {
      slots: {
        trigger: () => h('button', 'Open'),
        default: items,
      },
    });

    cy.get('.dropdown-menu').should('not.exist');
    cy.contains('Open').click();
    cy.get('.dropdown-menu').should('be.visible').and('contain.text', 'Profile');

    cy.get('body').click('bottomRight');
    cy.get('.dropdown-menu').should('not.exist');
  });
});
