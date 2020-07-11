import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class UrlInTemplate extends PolymerElement {
  constructor() {
    super();
  }
  static get importMeta() {
    return import.meta;
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
        img {
          max-width: 120px;
          margin-top: 1rem;
        }
        code {
          width: 15rem;
        }
      </style>
      <h3>URL IN TEMPLATE</h3>
      <ul>
        <li></li>
        <li></li>
      </ul>
      <img src$="[[importPath]]relative-image.png">
      <code>[[importPath]]relative-image.png</code>
      <img src$="[[rootPath]]src/polymerBasics-app/images/root-image.png">
      <code>[[rootPath]]src/polymerBasics-app/images/root-image.png</code>
    `;
  }
}
customElements.define('url-in-template', UrlInTemplate);