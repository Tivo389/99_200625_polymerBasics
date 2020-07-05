import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './multi-level-slot-parent'

class MultilevelSlots extends PolymerElement {
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
        :host p {
          margin: 0;
        }
        :host h3 {
          text-align: center;
          margin-bottom: var(--space-unit-md);
        }
        :host h4 {
          border: 1px dashed var(--color-gray);
          padding: 0.35em 0.7em 0.2275em 0.7em;
          border-radius: 8px;
          margin: 0;
        }
      </style>
      <h3>Multi-level Slots</h3>
      <multi-level-slot-parent>
        <h4 slot="parent">Parent</h4>
        <p slot="child">Child</p>
      </multi-level-slot-parent>
    `;
  }
}
customElements.define('multi-level-slots', MultilevelSlots);