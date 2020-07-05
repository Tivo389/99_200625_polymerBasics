import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './multi-level-slot-child'

class MultilevelSlotParent extends PolymerElement {
  constructor() {
    super();
    this.addEventListener('click', this._handleClick);
  }
  static get template () {
    return html`
      <style>
        :host {
          align-items: center;
          border-radius: var(--border-radius-md);
          box-sizing: border-box;
          background-color: var(--color-opaque-white);
          display: flex;
          flex-direction: column;
          flex: 1 0 auto;
          height: 100%;
          width: 100%;
          justify-content: center;
          padding: 2rem;
        }
        :host h4 {
          background: var(--color-red); /* Note how this style is not applied to the h4 (Parent) */
        }
      </style>
      <slot name="parent"></slot>
      <multi-level-slot-child>
        <slot name="child" slot="child"></slot>
      </multi-level-slot-child>
    `;
  }
}
customElements.define('multi-level-slot-parent', MultilevelSlotParent);