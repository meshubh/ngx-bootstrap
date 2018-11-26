import { BaseComponent } from './base.component';

export class CarouselPo extends BaseComponent {
  pageUrl = '/carousel';
  pageTitle = 'Carousel';
  ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/carousel';

  carouselClass = '.carousel';
  indicatorClass = '.carousel-indicators';
  itemClass = '.carousel-item';
  leftControl = '.carousel-control-prev';
  rightControl = '.carousel-control-next';

  exampleDemosArr = {
    basic: 'demo-carousel-basic',
    optionalCaptions: 'demo-carousel-captions',
    configuringDefaults: 'demo-carousel-config',
    dynamicSlides: 'demo-carousel-dynamic',
    pauseOnHover: 'demo-carousel-no-pause',
    customContent: 'demo-carousel-custom-content',
    disableLooping: 'demo-carousel-disable-looping',
    disableIndicator: 'demo-carousel-disable-indicator',
    interval: 'demo-carousel-interval',
    slideChangedEvent: 'demo-carousel-slide-changed-event',
    accessibility: 'demo-accessibility'
  };
}
