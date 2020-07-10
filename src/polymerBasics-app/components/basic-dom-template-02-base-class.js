import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

export class BasicDomTemplate02BaseClass extends PolymerElement {
  constructor() {
    super();
  }
  static get template () {
    return html`
      <style>
        .basicDomTemplate02BaseClass {
          padding: 0.75rem 1rem;
          background: var(--color-light-gray);
          display: inline-block;
          text-align: center;
          border-radius: 8px;
          margin: 0;
        }
        code {
          background-color: rgba(255, 43, 239, 0.3);
          padding: 4px;
          border-radius: 2;
          font-weight: lighter;
        }
        p {
          margin: 0;
        }
        p + p {
          margin-top: 0.65em;
        }
      </style>
      <div class="basicDomTemplate02BaseClass">
        <p>${this.headerTemplate}</p>
        <p>Hello! I am the Base Class 02!</p>
        <p>${this.footerTemplate}</p>
      </div>
    `;
  }
  static get headerTemplate() {
    return html`
      default <code>$&#123;this.headerTemplate&#125;</code>
    `;
  }
  static get footerTemplate() {
    return html`
      default <code>$&#123;super.footerTemplate&#125;</code>
    `;
  }
}
customElements.define('basic-dom-template-02-base-class', BasicDomTemplate02BaseClass);