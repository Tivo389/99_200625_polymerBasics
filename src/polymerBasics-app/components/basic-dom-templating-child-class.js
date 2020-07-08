import {html} from '@polymer/polymer/polymer-element.js';
import {BasicDomTemplatingBaseClass} from '../components/basic-dom-templating-base-class';

class BasicDomTemplatingChildClass extends BasicDomTemplatingBaseClass {
  constructor() {
    super();
  }
  static get template () {
    return html`
      <style>
        :host {
          padding: 0.5rem;
          background: var(--color-gray);
          display: inline-block;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
        }
        p {
          /* This will not apply due to the base class style which is rendered(?) after the child */
          margin-bottom: var(--space-unit-md);
        }
      </style>
      ${super.template}
      <p>Hello! I am the Child Class!</p>
    `;
  }
}
customElements.define('basic-dom-templating-child-class', BasicDomTemplatingChildClass);