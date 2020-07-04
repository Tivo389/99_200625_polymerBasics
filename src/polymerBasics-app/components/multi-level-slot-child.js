import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class MultilevelSlotChild extends PolymerElement {
  constructor() {
    super();
    this.addEventListener('click', this._handleClick);
  }
  static get template () {
    return html`
      <style>
        :host {
          align-items: center;
          background-color: var(--color-opaque-white);
          border-radius: var(--border-radius-md);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          flex: 1 0 auto;
          height: 100%;
          justify-content: center;
          margin: 2rem;
          padding: 2rem;
          width: 100%;
        }
      </style>
      <slot data-level="childLevel"></slot>
    `;
  }
}
customElements.define('multi-level-slot-child', MultilevelSlotChild);