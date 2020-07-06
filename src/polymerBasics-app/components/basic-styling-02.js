import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './basic-styling-02-sample-tile';

class BasicStyling02 extends PolymerElement {
  constructor() {
    super();
  }
  static get template () {
    return html`
      <style include="style-module-index">
        :host {
          align-items: center;
          background-color: var(--color-opaque-white);
          border-radius: var(--border-radius-md);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
        }
      </style>
      <h3>basic-styling-02</h3>
      <ul>
        <li><b>200706 / Global-Local Structure Review</b></li>
        <li>Objective here was to review how component-level controls would be applied with CSS variables.</li>
        <li>The basic values and units are defined in the root/global level (index.html).</li>
        <li>The global vars are then applied as values at a component level.</li>
        <li>Note that element-level assignments were not included to focus solely on global-local structure.</li>
        <li>This approach did the initial styling by using the global vars (e.g. --color-white), and then duplicating the lines to create component-level vars (e.g. --tile-color).</li>
          <ul>
            <li>This does lead to some semantic problems such as --tile-color which determines '(font) color' and not the color of the tile.</li>
            <li>This was due to '--tile-' being prefixed via multi-cursor typing.</li>
            <li>Naming convention consistency would help maintain clarity.</li>
          </ul>
        <li>The duplicated properties may feel excessive. However, we need to keep in mind that this to focus on global-local structure. Element-level structure was not included intentionally.</li>
        <li>Hypothetically, a flow of "global => element => component" should help reduce each component into a more maintainable amount.</li>
        <li>The element-level properties should primarily consist of fundamental styles (i.e. font-family, weight, size, etc)</li>
        <li>The component-level properties should primarily consist of layout and subtle visuals (i.e. border)</li>
        <li>Will test same component with different approach.</li>
      </ul>
      <basic-styling-02-sample-tile></basic-styling-02-sample-tile>
    `;
  }
}
customElements.define('basic-styling-02', BasicStyling02);