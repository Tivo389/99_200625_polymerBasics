import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './css/style-module-index.js';

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
          font-family: sans-serif;
          height: 100vh;
          justify-content: center;
          width: 100vw;
          transition-duration: var(--duration-lg);
        }
        :host(.active) {
          background: var(--color-blue);
        }
        :host(.active) h1 {
          color: var(--color-gold);
        }
      </style>
      <h1>
        [[prop1]]!
      </h1>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'CLICK ME'
      }
    };
  }
  ready() {
    super.ready();
    this.addEventListener('click', this._handleClick);
  }
  _handleClick(e) {
    e.currentTarget.classList.toggle('active');
  }
}

window.customElements.define('polymer-basics', PolymerBasics);
