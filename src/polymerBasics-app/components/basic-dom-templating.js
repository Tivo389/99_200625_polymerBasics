import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './basic-dom-templating-base-class.js';
import './basic-dom-templating-child-class.js';

class BasicDomTemplating extends PolymerElement {
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
        h3 {
          margin-bottom: var(--space-unit-md);
        }
      </style>
      <h3>Basic DOM Templating</h3>
      <basic-dom-templating-base-class></basic-dom-templating-base-class>
      <hr>
      <basic-dom-templating-child-class></basic-dom-templating-child-class>
    `;
  }
}
customElements.define('basic-dom-templating', BasicDomTemplating);