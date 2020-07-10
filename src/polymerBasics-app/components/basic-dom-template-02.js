import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './basic-dom-template-02-base-class.js';
import './basic-dom-template-02-child-class.js';

class BasicDomTemplate02 extends PolymerElement {
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
      <h3>Basic Base & Child Class 02</h3>
      <basic-dom-template-02-base-class></basic-dom-template-02-base-class>
      <hr>
      <basic-dom-template-02-child-class></basic-dom-template-02-child-class>
    `;
  }
}
customElements.define('basic-dom-template-02', BasicDomTemplate02);