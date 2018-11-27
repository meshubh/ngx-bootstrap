import { CollapsePo } from '../support/collapse.po';

describe('Collapse demo page test suite', () => {
  const collapse = new CollapsePo();

  beforeEach(() => collapse.navigateTo());

  describe('Events', () => {
    const events = collapse.exampleDemosArr.events;

    it('example contains "Toggle collapse" button and div block with "Some content", "Event: expanded"', () => {
      cy.get(`${ events } ${ collapse.collapseClass }`)
        .should('to.have.class', collapse.showIndicator)
        .and('to.have.attr', 'aria-expanded', 'true');

      cy.get(`${ events } ${ collapse.infoClass }`).invoke('text')
        .should(infoTxt => expect(infoTxt).to.equal('Event: expanded'));
    });

    it('when user clicks on "Toggle collapse", then "Some content" disappear and user see "Event: collapsed"', () => {
      const toglerText = 'Toggle collapse';
      collapse.clickByText(events, toglerText);
      cy.get(`${ events } ${ collapse.collapseClass }`)
        .should('not.to.have.class', collapse.showIndicator)
        .and('to.have.attr', 'aria-expanded', 'false');

      cy.get(`${ events } ${ collapse.infoClass }`).invoke('text')
        .should(infoTxt => expect(infoTxt).to.equal('Event: collapsed'));
    });

    it('when user clicks on "Toggle collapse" again, then "Some content" and "Event: expanded" appear', () => {
      const toglerText = 'Toggle collapse';
      collapse.dblClickByText(events, toglerText);
      cy.get(`${ events } ${ collapse.collapseClass }`)
        .should('to.have.class', collapse.showIndicator)
        .and('to.have.attr', 'aria-expanded', 'true');

      cy.get(`${ events } ${ collapse.infoClass }`).invoke('text')
        .should(infoTxt => expect(infoTxt).to.equal('Event: expanded'));
    });
  });

  describe('Manual toggle', () => {
    const manualToggle = collapse.exampleDemosArr.manualToggle;

    beforeEach(() => {
      collapse.scrollToMenu('Manual toggle');
    });

    it('example contains "Show content" and "Hide content" buttons, div block with "Some content"', () => {
      cy.get(`${ manualToggle } button`).eq(0).invoke('text')
        .should(btnTxt => expect(btnTxt).to.equal('Show content\n'));
      cy.get(`${ manualToggle } button`).eq(1).invoke('text')
        .should(btnTxt => expect(btnTxt).to.equal('Hide content\n'));
      cy.get(`${ manualToggle } ${ collapse.collapseClass }`)
        .should('to.have.class', collapse.showIndicator)
        .and('to.have.attr', 'aria-expanded', 'true');
    });

    it('when user clicks on "Hide content", then collapse disappear, on "Show content" - "Some content" appear', () => {
      cy.get(`${ manualToggle } button`).eq(1).click();
      cy.get(`${ manualToggle } ${ collapse.collapseClass }`)
        .should('not.to.have.class', collapse.showIndicator)
        .and('to.have.attr', 'aria-expanded', 'false');
      cy.get(`${ manualToggle } button`).eq(0).click();
      cy.get(`${ manualToggle } ${ collapse.collapseClass }`)
        .should('to.have.class', collapse.showIndicator)
        .and('to.have.attr', 'aria-expanded', 'true');
    });
  });

  describe('Inline display', () => {
    const inlineDisplay = collapse.exampleDemosArr.inlineDisplay;

    beforeEach(() => {
      collapse.scrollToMenu('Inline display');
    });

    it('example contains "Inline-block" and "None" buttons', () => {
      cy.get(`${ inlineDisplay } button`).eq(0).invoke('text')
        .should(btnTxt => expect(btnTxt).to.equal('Inline-block\n'));
      cy.get(`${ inlineDisplay } button`).eq(1).invoke('text')
        .should(btnTxt => expect(btnTxt).to.equal('None\n'));
      cy.get(`${ inlineDisplay } ${ collapse.collapseClass }`)
        .should('not.to.have.class', collapse.showIndicator)
        .and('to.have.attr', 'aria-expanded', 'false');
    });

    it('when user clicks on "Inline-block", then collapse appear with inline-block, on "None" - without inline', () => {
      cy.get(`${ inlineDisplay } button`).eq(0).click();
      cy.get(`${ inlineDisplay } ${ collapse.collapseClass }`)
        .should('not.to.have.class', collapse.showIndicator)
        .and('to.have.attr', 'aria-expanded', 'false')
        .and('to.have.attr', 'style', 'display: inline-block;');
      cy.get(`${ inlineDisplay } button`).eq(1).click();
      cy.get(`${ inlineDisplay } ${ collapse.collapseClass }`)
        .should('not.to.have.class', collapse.showIndicator)
        .and('to.have.attr', 'aria-expanded', 'false')
        .and('to.have.attr', 'style', 'display: none;');
    });
  });

  describe('Accessibility', () => {
    it('example contains info about "aria-expanded", "aria-controls" attributes', () => {
      const accessibilityInfo = collapse.exampleDemosArr.accessibility;
      cy.viewport(1440, 900);
      collapse.clickOnDemoMenu('Accessibility');
      cy.get(`${accessibilityInfo}`).invoke('text')
        .should(blockTxt => {
          expect(blockTxt).to.contains('aria-expanded');
          expect(blockTxt).to.contains('aria-controls');
        });
      });
    });
});
