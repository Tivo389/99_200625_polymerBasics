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
        }
      </style>
      <h3>Multi-level Slots</h3>
      <multi-level-slot-parent>
        <p>I am first assigned to parentLevel, then parentLevel is assigned to childLevel</p>
      </multi-level-slot-parent>
    `;
  }
}
customElements.define('multi-level-slots', MultilevelSlots);