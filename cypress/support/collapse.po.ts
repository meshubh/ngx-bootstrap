import { BaseComponent } from './base.component';

export class CollapsePo extends BaseComponent {
  pageUrl = '/collapse';
  pageTitle = 'Collapse';
  ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/collapse';

  collapseClass = '.collapse';
  showIndicator = 'in show';
  infoClass = '.col-md-9';

  exampleDemosArr = {
    basic: 'collapse-demo',
    events: 'collapse-demo-events',
    manualToggle: 'toggle-manual-demo',
    inlineDisplay: 'inline-display-demo',
    accessibility: 'demo-accessibility'
  };
}
