import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './basic-styling-03-sample-tile';

class BasicStyling03 extends PolymerElement {
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
      <h3>basic-styling-03</h3>
      <ul>
        <li><b>200706 / Global-Element-Component Structure Review</b></li>
        <li>This approach definitely make things more maintainable. However, it also gives rise to the question of which properties make sense as element-level and which ones at component-level.</li>
        <li>999 CONTINUE HERE</li>
      </ul>
      <basic-styling-03-sample-tile></basic-styling-03-sample-tile>
    `;
  }
}
customElements.define('basic-styling-03', BasicStyling03);