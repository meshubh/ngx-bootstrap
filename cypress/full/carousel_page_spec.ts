import { CarouselPo } from '../support/carousel.po';

describe('Carousel page test suite', () => {
  const carousel = new CarouselPo();

  beforeEach(() => carousel.navigateTo());

  describe('Basic', () => {
    const basic = carousel.exampleDemosArr.basic;

    it('when user click on indicator item - appropriate slide shown', () => {
      cy.get(`${basic} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(1)
        .click()
        .should('have.class', 'active');
      cy.get(`${basic} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0)
        .click()
        .should('have.class', 'active');
      cy.get(`${basic} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(2)
        .click()
        .should('have.class', 'active');
    });

    it('when user click on left/right arrow - previous/next slide shown', () => {
      cy.get(`${basic} ${carousel.leftControl}`).click();
      cy.get(`${basic} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(2)
        .should('have.class', 'active');
      cy.get(`${basic} ${carousel.rightControl}`).click();
      cy.get(`${basic} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0)
        .should('have.class', 'active');
    });

    it('when user do nothing more than 5 sec - next slide automatically shown', () => {
      carousel.scrollToMenu('Basic');
      cy.get(`${basic} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0)
        .should('have.class', 'active');
      cy.wait(6000);
      cy.get(`${basic} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(1)
        .should('have.class', 'active');
    });
  });

  describe('Optional captions', () => {
    const optCaptions = carousel.exampleDemosArr.optionalCaptions;

    it('example contains slides, indicators, left and right controls and captions', () => {
      carousel.scrollToMenu('Optional captions');
      cy.get(`${optCaptions} ${carousel.carouselClass}`)
        .should('to.have.descendants', carousel.indicatorClass)
        .and('to.have.descendants', carousel.itemClass)
        .and('to.have.descendants', carousel.leftControl)
        .and('to.have.descendants', carousel.rightControl);
      cy.get(`${optCaptions} ${carousel.carouselClass} slide `)
        .each((slide, index) => {
          expect(slide).to.have.class('item')
            .and.to.have.descendants('.carousel-caption')
            .and.to.have.descendants('h3');
        });
    });

    it('when user click on indicator item - appropriate slide shown', () => {
      cy.get(`${optCaptions} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(1)
        .click()
        .should('have.class', 'active');
      cy.get(`${optCaptions} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0)
        .click()
        .should('have.class', 'active');
      cy.get(`${optCaptions} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(2)
        .click()
        .should('have.class', 'active');
    });

    it('when user click on left/right arrow - previous/next slide shown', () => {
      carousel.scrollToMenu('Optional captions');
      cy.get(`${optCaptions} ${carousel.leftControl}`).click();
      cy.get(`${optCaptions} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(2)
        .should('have.class', 'active');
      cy.get(`${optCaptions} ${carousel.rightControl}`).click();
      cy.get(`${optCaptions} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0)
        .should('have.class', 'active');
    });

    it('when user do nothing more than 5 sec - next slide automatically shown', () => {
      carousel.scrollToMenu('Optional captions');
      cy.get(`${optCaptions} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0)
        .should('have.class', 'active');
      cy.wait(6000);
      cy.get(`${optCaptions} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(1)
        .should('have.class', 'active');
    });
  });

  describe('Configuring defaults', () => {
    const confDefaults = carousel.exampleDemosArr.configuringDefaults;

    it('example contains slides, indicators, left and right controls and captions', () => {
      carousel.scrollToMenu('Configuring defaults');
      cy.get(`${confDefaults} ${carousel.carouselClass}`)
        .should('to.have.descendants', carousel.indicatorClass)
        .and('to.have.descendants', carousel.itemClass)
        .and('to.have.descendants', carousel.leftControl)
        .and('to.have.descendants', carousel.rightControl);
      cy.get(`${confDefaults} ${carousel.carouselClass} slide `)
        .each((slide, index) => {
          expect(slide).to.have.class('item')
            .and.to.have.descendants('.carousel-caption')
            .and.to.have.descendants('h3');
        });
    });

    it('when user click on indicator item - appropriate slide shown', () => {
      cy.get(`${confDefaults} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(1)
        .click()
        .should('have.class', 'active');
      cy.get(`${confDefaults} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0)
        .click()
        .should('have.class', 'active');
    });

    it('when user do nothing more than 1.5 sec - next slide automatically shown', () => {
      carousel.scrollToMenu('Optional captions');
      cy.get(`${confDefaults} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0)
        .should('have.class', 'active');
      cy.wait(2000);
      cy.get(`${confDefaults} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(1)
        .should('have.class', 'active');
    });
  });

  describe('Dynamic Slides ', () => {
    const dynamicSlides = carousel.exampleDemosArr.dynamicSlides;

    it('example contains slides, indicators, left and right controls and captions', () => {
      carousel.scrollToMenu('Dynamic Slides');
      cy.get(`${dynamicSlides} ${carousel.carouselClass}`)
        .should('to.have.descendants', carousel.indicatorClass)
        .and('to.have.descendants', carousel.itemClass)
        .and('to.have.descendants', carousel.leftControl)
        .and('to.have.descendants', carousel.rightControl);
      cy.get(`${dynamicSlides} ${carousel.carouselClass} slide `)
        .each((slide, index) => {
          expect(slide).to.have.class('item')
            .and.to.have.descendants('.carousel-caption')
            .and.to.have.descendants('h4');
        });
    });

    it('example contains 3 additional buttons: "Add Slide", "Remove Current", "Remove #3"', () => {
      carousel.scrollToMenu('Dynamic Slides');
      cy.get(`${dynamicSlides} button`)
        .should('to.have.length', 3);
      cy.get(`${dynamicSlides} button`).eq(0).invoke('text')
        .should(btnTxt => expect(btnTxt).to.equal('Add Slide '));
      cy.get(`${dynamicSlides} button`).eq(1).invoke('text')
        .should(btnTxt => expect(btnTxt).to.equal('Remove Current '));
      cy.get(`${dynamicSlides} button`).eq(2).invoke('text')
        .should(btnTxt => expect(btnTxt).to.equal('Remove #3 '));
    });

    it('when user click on "Add Slide", then amount of slides increased at 1 with header and info', () => {
      carousel.scrollToMenu('Dynamic Slides');
      cy.get(`${dynamicSlides} ${carousel.indicatorClass} li`)
        .should('to.have.length', 4);
      cy.get(`${dynamicSlides} button`).eq(0).click();
      cy.get(`${dynamicSlides} ${carousel.indicatorClass} li`)
        .should('to.have.length', 5);
      cy.get(`${dynamicSlides} button`).eq(0).click();
      cy.get(`${dynamicSlides} ${carousel.indicatorClass} li`)
        .should('to.have.length', 6);
    });

    it('when user click on "Remove Current", then amount of slides decreased at 1 and current slide deleted', () => {
      carousel.scrollToMenu('Dynamic Slides');
      cy.get(`${dynamicSlides} ${carousel.indicatorClass} li`)
        .should('to.have.length', 4);
      cy.get(`${dynamicSlides} button`).eq(1).click();
      cy.get(`${dynamicSlides} ${carousel.indicatorClass} li`)
        .should('to.have.length', 3);
      cy.get(`${dynamicSlides} button`).eq(1).click();
      cy.get(`${dynamicSlides} ${carousel.indicatorClass} li`)
        .should('to.have.length', 2);
    });

    it('when user click on "Remove #3" - then third slide deleted', () => {
      carousel.scrollToMenu('Dynamic Slides');
      cy.get(`${dynamicSlides} ${carousel.indicatorClass} li`)
        .should('to.have.length', 4);
      cy.get(`${dynamicSlides} button`).eq(2).click();
      cy.get(`${dynamicSlides} ${carousel.indicatorClass} li`)
        .should('to.have.length', 3);
      cy.get(`${dynamicSlides} button`).eq(2).click();
      cy.get(`${dynamicSlides} ${carousel.indicatorClass} li`)
        .should('to.have.length', 2);
      cy.get(`${dynamicSlides} button`).eq(2).click();
      cy.get(`${dynamicSlides} ${carousel.indicatorClass} li`)
        .should('to.have.length', 2);
    });

    it('when user do nothing more than 5 sec - next slide automatically shown', () => {
      carousel.scrollToMenu('Optional captions');
      cy.get(`${dynamicSlides} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0)
        .should('have.class', 'active');
      cy.wait(6000);
      cy.get(`${dynamicSlides} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(1)
        .should('have.class', 'active');
    });
  });

  describe('Pause on hover ', () => {
    const pauseOnHoverSlides = carousel.exampleDemosArr.pauseOnHover;

    it('example contains carousel component with slides, arrows and "Toggle pause on hover" button', () => {
      carousel.scrollToMenu('Pause on hover');
      cy.get(`${pauseOnHoverSlides} ${carousel.carouselClass}`)
        .should('to.have.descendants', carousel.indicatorClass)
        .and('to.have.descendants', carousel.itemClass)
        .and('to.have.descendants', carousel.leftControl)
        .and('to.have.descendants', carousel.rightControl);
      cy.get(`${pauseOnHoverSlides} ${carousel.carouselClass} slide `)
        .each((slide, index) => {
          expect(slide).to.have.class('item')
            .and.to.have.descendants('.carousel-caption')
            .and.to.have.descendants('h3');
        });
      cy.get(`${pauseOnHoverSlides} button`).invoke('text')
        .should(firstBtnTxt => expect(firstBtnTxt).to.equal('Toggle pause on hover '));
    });

    it('when user click on "Toggle pause on hover" and hover slide - then after 5 sec slide stay opened', () => {
      carousel.scrollToMenu('Pause on hover');
      cy.get(`${pauseOnHoverSlides} button`).click();
      cy.get(`${pauseOnHoverSlides} ${carousel.carouselClass} div`).eq(1).trigger('mouseenter');
      cy.get(`${pauseOnHoverSlides} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0)
        .should('have.class', 'active');
      cy.wait(6000);
      cy.get(`${pauseOnHoverSlides} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0)
        .should('have.class', 'active');
      cy.get(`${pauseOnHoverSlides} button`).click();
    });

    it('when user click on "Toggle pause on hover" again, hover slide - then after 5 sec slide changed', () => {
      carousel.scrollToMenu('Pause on hover');
      cy.get(`${pauseOnHoverSlides} button`).dblclick();
      cy.get(`${pauseOnHoverSlides} ${carousel.carouselClass} div`).eq(1).trigger('mouseenter');
      cy.get(`${pauseOnHoverSlides} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0)
        .should('have.class', 'active');
      cy.wait(6000);
      cy.get(`${pauseOnHoverSlides} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(1);
    });
  });

  describe('Custom content ', () => {
    const customContentSlides = carousel.exampleDemosArr.customContent;

    it('example contains slides, indicators, left and right controls and custom content', () => {
      carousel.scrollToMenu('Custom content');
      cy.get(`${customContentSlides} ${carousel.carouselClass}`)
        .should('to.have.descendants', carousel.indicatorClass)
        .and('to.have.descendants', carousel.itemClass)
        .and('to.have.descendants', carousel.leftControl)
        .and('to.have.descendants', carousel.rightControl);
      cy.get(`${customContentSlides} ${carousel.carouselClass} slide `)
        .each((slide, index) => {
          expect(slide).to.have.class('item')
            .and.to.have.descendants('h3')
            .and.to.have.descendants('p')
            .and.to.have.descendants('.lead')
            .and.to.have.descendants('h2');
        });
    });
  });

  describe('Disable slide looping ', () => {
    const disableLoopingSlides = carousel.exampleDemosArr.disableLooping;

    it('example contains slides, indicators, left and right controls and "Disable Slide Looping" checkbox', () => {
      carousel.scrollToMenu('Disable slide looping');
      cy.get(`${disableLoopingSlides} ${carousel.carouselClass}`)
        .should('to.have.descendants', carousel.indicatorClass)
        .and('to.have.descendants', carousel.itemClass)
        .and('to.have.descendants', carousel.leftControl)
        .and('to.have.descendants', carousel.rightControl);
      cy.get(`${disableLoopingSlides} label`).invoke('text')
        .should(inputTxt => expect(inputTxt).to.equal('Disable Slide Looping'));
    });

    it('when user click on checkbox "Disable Slide Looping", then no one slide should be shown after latest', () => {
      carousel.scrollToMenu('Disable slide looping');
      cy.get(`${disableLoopingSlides} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(2)
        .click()
        .should('have.class', 'active');
      cy.get(`${disableLoopingSlides} input`).click();
      cy.wait(6000);
      cy.get(`${disableLoopingSlides} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(2)
        .should('have.class', 'active');
    });

    it('when user uncheck "Disable slide looping", then slides continue changing after 5 sec', () => {
      carousel.scrollToMenu('Disable slide looping');
      cy.get(`${disableLoopingSlides} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(2)
        .click()
        .should('have.class', 'active');
      cy.get(`${disableLoopingSlides} input`).dblclick();
      cy.wait(6000);
      cy.get(`${disableLoopingSlides} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0)
        .should('have.class', 'active');
    });
  });
  describe('Disable indicator ', () => {
    const disableIndicatorSlides = carousel.exampleDemosArr.disableIndicator;

    it('example contains slides, indicators, left and right controls and "Enable/Disable" button', () => {
      carousel.scrollToMenu('Disable indicator');
      cy.get(`${disableIndicatorSlides} ${carousel.carouselClass}`)
        .should('to.have.descendants', carousel.indicatorClass)
        .and('to.have.descendants', carousel.itemClass)
        .and('to.have.descendants', carousel.leftControl)
        .and('to.have.descendants', carousel.rightControl);
      cy.get(`${disableIndicatorSlides} button`).invoke('text')
        .should(btnTxt => expect(btnTxt).to.equal('Enable/Disable Indicator '));
    });

    it('when user click on "Enable/Disable Indicator" - indicator disappeared', () => {
      carousel.scrollToMenu('Disable indicator');
      cy.get(`${disableIndicatorSlides} button`).click();
      cy.get(`${disableIndicatorSlides} ${carousel.carouselClass}`)
        .should('to.not.have.descendants', carousel.indicatorClass)
        .and('to.have.descendants', carousel.itemClass);
    });

    it('when user click on "Enable/Disable Indicator" again - indicator appeared', () => {
      carousel.scrollToMenu('Disable indicator');
      cy.get(`${disableIndicatorSlides} button`).dblclick();
      cy.get(`${disableIndicatorSlides} ${carousel.carouselClass}`)
        .should('to.have.descendants', carousel.indicatorClass)
        .and('to.have.descendants', carousel.itemClass);
    });
  });

  describe('Interval ', () => {
    const intervalSlides = carousel.exampleDemosArr.interval;

    it('example contains slides, indicators, left and right controls and input with default interval: 1500', () => {
      carousel.scrollToMenu('Interval');
      cy.get(`${intervalSlides} ${carousel.carouselClass}`)
        .should('to.have.descendants', carousel.indicatorClass)
        .and('to.have.descendants', carousel.itemClass)
        .and('to.have.descendants', carousel.leftControl)
        .and('to.have.descendants', carousel.rightControl);
      cy.get(`${intervalSlides} input`)
        .should('have.attr', 'type', 'number')
        .and('have.attr', 'ng-reflect-model', '1500');
    });

    it('when user change the interval in input to any positive value - then slides change after added interval', () => {
      carousel.scrollToMenu('Interval');
      const newInterval = '3000';
      cy.get(`${intervalSlides} input`).clear().type(newInterval)
        .should('have.attr', 'type', 'number')
        .and('have.attr', 'ng-reflect-model', newInterval);
      cy.get(`${intervalSlides} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0);
      cy.wait(3500);
      cy.get(`${intervalSlides} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(1);
    });

    it('When user change the interval in input to "0" - then slider stopped', () => {
      carousel.scrollToMenu('Interval');
      const newInterval = '0';
      cy.get(`${intervalSlides} input`).clear().type(newInterval)
        .should('have.attr', 'type', 'number')
        .and('have.attr', 'ng-reflect-model', newInterval);
      cy.get(`${intervalSlides} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0);
      cy.wait(3000);
      cy.get(`${intervalSlides} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0);
    });

    it('When user change the interval in input to any negative value - then carousel stopped', () => {
      carousel.scrollToMenu('Interval');
      const newInterval = '-100';
      cy.get(`${intervalSlides} input`).clear().type(newInterval)
        .should('have.attr', 'type', 'number')
        .and('have.attr', 'ng-reflect-model', newInterval);
      cy.get(`${intervalSlides} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0);
      cy.wait(3000);
      cy.get(`${intervalSlides} ${carousel.carouselClass} ${carousel.indicatorClass} li `)
        .eq(0);
    });
  });

  describe('Slide changed event ', () => {
    const changedEventSlides = carousel.exampleDemosArr.slideChangedEvent;

    it('example contains slides, indicators, left and right controls and "Slide has been switched: 0"', () => {
      carousel.scrollToMenu('Slide changed event');
      cy.get(`${changedEventSlides} ${carousel.carouselClass}`)
        .should('to.have.descendants', carousel.indicatorClass)
        .and('to.have.descendants', carousel.itemClass)
        .and('to.have.descendants', carousel.leftControl)
        .and('to.have.descendants', carousel.rightControl);
      cy.get(`${changedEventSlides} .card.card-block`).invoke('text')
        .should(blockTxt => expect(blockTxt).to.equal('Slide has been switched: 0'));
    });

    it('when user click on left arrow - info changed to "Slide has been switched: 2"', () => {
      carousel.scrollToMenu('Slide changed event');
      cy.get(`${changedEventSlides} ${carousel.leftControl}`).click();
      cy.get(`${changedEventSlides} .card.card-block`).invoke('text')
        .should(blockTxt => expect(blockTxt).to.equal('Slide has been switched: 2'));
    });

    it('when user click on left arrow again - info changed to "Slide has been switched: 1"', () => {
      carousel.scrollToMenu('Slide changed event');
      cy.get(`${changedEventSlides} ${carousel.leftControl}`).click();
      cy.get(`${changedEventSlides} ${carousel.leftControl}`).click();
      cy.get(`${changedEventSlides} .card.card-block`).invoke('text')
        .should(blockTxt => expect(blockTxt).to.equal('Slide has been switched: 1'));
    });

    it('when user click on right arrow - info changed to "Slide has been switched: 1"', () => {
      carousel.scrollToMenu('Slide changed event');
      cy.get(`${changedEventSlides} ${carousel.rightControl}`).click();
      cy.get(`${changedEventSlides} .card.card-block`).invoke('text')
        .should(blockTxt => expect(blockTxt).to.equal('Slide has been switched: 1'));
    });

    it('when user click on right arrow again - info changed to "Slide has been switched: 2"', () => {
      carousel.scrollToMenu('Slide changed event');
      cy.get(`${changedEventSlides} ${carousel.rightControl}`).click();
      cy.get(`${changedEventSlides} ${carousel.rightControl}`).click();
      cy.get(`${changedEventSlides} .card.card-block`).invoke('text')
        .should(blockTxt => expect(blockTxt).to.equal('Slide has been switched: 2'));
    });
  });

  describe('Accessibility ', () => {
    const accessibilityInfo = carousel.exampleDemosArr.accessibility;

    it('example contains info about "alt" attribute', () => {
      cy.viewport(1440, 900);
      carousel.clickOnDemoMenu('Accessibility');
      cy.get(`${accessibilityInfo}`).invoke('text')
        .should(blockTxt => expect(blockTxt).to.contains('alt'));
    });
  });
});
