import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './css/style-module-index.js';
import './components/basic-button.js'

/**
 * @customElement
 * @polymer
 */
class PolymerBasics extends PolymerElement {
  static get template() {
    return html`
      <!-- 03: Assign styling for the element -->
      <style>
        :host {
          align-items: center;
          background: var(--color-gold);
          display: flex;
          flex-direction: column;
          height: 100vh;
          justify-content: center;
          transition-duration: var(--duration-lg);
          width: 100vw;
        }
        /* 04: When the host-element (polymer-basics) has active class */
        :host(.active) {
          background: var(--color-white);
        }
      </style>
      <!-- 05: This is an element in an element => basic-button.js -->
      <basic-button></basic-button>
    `;
  }
  ready() {
    super.ready();
  }
}

window.customElements.define('polymer-basics', PolymerBasics);
