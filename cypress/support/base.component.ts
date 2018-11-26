export abstract class BaseComponent {
  titleSel = 'h1';
  titleLinkSel = '.content-header a';
  usageExSel = 'demo-top-section h2';
  usageExCodeSel = 'demo-top-section .prettyprint';
  abstract pageUrl: string;
  titleDefaultExample = 'Usage';

  navigateTo() {
    cy.visit(this.pageUrl);
  }

  scrollToMenu(subMenu: string) {
    cy.get('examples h3').contains(subMenu).scrollIntoView();
  }

  clickOnDemoMenu(subMenu: string) {
    cy.get('add-nav').contains('a', subMenu).click();
  }

  clickByText(parent: string, text: string) {
    cy.get(parent).contains(text).click();
  }
}
