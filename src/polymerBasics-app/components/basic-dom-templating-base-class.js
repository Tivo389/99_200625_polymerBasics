import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

export class BasicDomTemplatingBaseClass extends PolymerElement {
  constructor() {
    super();
  }
  static get template () {
    return html`
      <style>
        p {
          padding: 0.5rem 0.75rem;
          background: var(--color-light-gray);
          display: inline-block;
          border-radius: 8px;
          margin: 0;
        }
        p + p {
          /*
          - This will only apply if the base class comes first so the structure p + p applies
          - Depending on base-child composition, the dom becomes <style><p><style><p>
          - I get the impression Polymer is made intentionally to avoid structure-oriented styling
          */
          margin-top: var(--space-unit-sm);
        }
      </style>
      <p>Hi! I'm the Base Class!</p>
    `;
  }
}
customElements.define('basic-dom-templating-base-class', BasicDomTemplatingBaseClass);