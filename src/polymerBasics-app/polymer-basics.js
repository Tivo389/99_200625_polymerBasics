import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './css/style-module-index.js';
import './components/basic-button.js'
import './components/basic-properties.js'
import './components/basic-shadow-dom.js'
import './components/component-template.js'
import './components/multi-level-slots.js'
import './components/basic-styling-01.js'

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
      <basic-shadow-dom>
        This <b>1st</b> line of text goes in the unnamed slot.
        <span slot="namedSlot">This <b>2nd</b> line of text goes in the named slot.</span>
        <span>This <b>3rd</b> line of text will appear combined with the 1st line of text.</span>
        <span slot="unknownSlot">This <b>4th</b> line of text will appear no where.</span>
        <span>
          <span slot="namedSlot">
            This <b>5th</b> line of text in the second-level child will not match the named slot and be placed in the unname slot as only top-level children can match a slot.
          </span>
        </span>
        <!-- <span slot="fallbackSlot">I will replace fallback content if uncommented</span> -->
      </basic-shadow-dom>
      <multi-level-slots></multi-level-slots>
      <basic-styling-01></basic-styling-01>
      <component-template></component-template>
    `;
  }
  ready() {
    super.ready();
  }
}

window.customElements.define('polymer-basics', PolymerBasics);
