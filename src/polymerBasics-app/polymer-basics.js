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
      <style include="style-module-index">
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
        :host(.active) {
          background: var(--color-white);
        }
      </style>
      <h3>Basic Buttons</h3>
      <basic-button></basic-button>
    `;
  }
  ready() {
    super.ready();
  }
}

window.customElements.define('polymer-basics', PolymerBasics);
