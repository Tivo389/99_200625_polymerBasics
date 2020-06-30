import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class ComponentTemplate extends PolymerElement {
  constructor() {
    super();
    this.addEventListener('click', this._handleClick);
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
      <h3>Component Template</h3>
    `;
  }
  _handleClick(e) {
    console.log('You Clicked Me!');
  }
}
customElements.define('component-template', ComponentTemplate);