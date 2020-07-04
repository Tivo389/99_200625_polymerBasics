import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class BasicShadowDom extends PolymerElement {
  constructor() {
    super();
    this.addEventListener('click', this._handleClick);
  }
  static get template () {
    return html`
      <style include="style-module-index">
        :host {
          align-items: flex-start;
          background-color: var(--color-opaque-white);
          border-radius: var(--border-radius-md);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
        }
        hr {
          width: 100%;
          border: 0;
          background: var(--color-gray);
          height: 1px;
        }
        code {
          text-transform: uppercase;
          margin-bottom: var(--space-unit-sm);
        }
      </style>
      <h3>Basic Shadow Dom</h3>
      <ul>
        <li>Basic Shadow DOM</li>
        <li>Basic Slots</li>
      </ul>
      <hr>
      <code>Unnamed Slot</code>
      <p><slot></slot></p>
      <hr>
      <code>Named Slot</code>
      <p><slot name="namedSlot"></slot></p>
      <hr>
      <code>Fallback Content</code>
      <p><slot name="fallbackSlot">This is the fallback content being displayed</slot></p>
    `;
  }
  _handleClick(e) {
    console.log('You Clicked Me!');
  }
}
customElements.define('basic-shadow-dom', BasicShadowDom);