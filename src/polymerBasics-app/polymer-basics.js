import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './css/style-module-index.js';
import './components/basic-button.js'
import './components/basic-properties.js'
import './components/component-template.js'

/**
 * @customElement
 * @polymer
 */
class PolymerBasics extends PolymerElement {
  static get template() {
    return html`
      <!-- 03: Assign styling for the element -->
      <style include="style-module-index">
        :host {
          background: var(--color-gold);
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          min-height: 100vh;
          transition-duration: var(--duration-lg);
          padding: 1rem;
          min-width: 100%;
          margin: 0;
        }
        /* 04: When the host-element (polymer-basics) has active class */
        :host(.active) {
          background: var(--color-white);
        }
      </style>
      <!-- 05: This is an element in an element => basic-button.js -->
      <basic-button></basic-button>
      <basic-properties></basic-properties>
      <component-template></component-template>
    `;
  }
  ready() {
    super.ready();
  }
}

window.customElements.define('polymer-basics', PolymerBasics);
