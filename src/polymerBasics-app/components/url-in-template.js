import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class UrlInTemplate extends PolymerElement {
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
      <h3>URL IN TEMPLATE</h3>
      <p>999 COnitnue here</p>
    `;
  }
}
customElements.define('url-in-template', UrlInTemplate);