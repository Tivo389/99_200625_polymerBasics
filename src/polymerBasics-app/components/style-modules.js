import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class StyleModules extends PolymerElement {
  constructor() {
    super();
  }
  static get template () {
    return html`
      <style include="style-from-module"></style>
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
        .styleFromComponent, .styleFromModule {
          text-align: center;
          padding: 1em 1.25em;
          color: white;
        }
        .styleFromComponent {
          background: var(--color-gray);
        }
      </style>
      <h3>Style Modules</h3>
      <div class="styleFromContainer">
        <div class="styleFromComponent">
          <code>styleFromComponent</code>
        </div>
        <div class="styleFromModule">
          <code>styleFromModule</code>
        </div>
      </div>
    `;
  }
}
customElements.define('style-modules', StyleModules);