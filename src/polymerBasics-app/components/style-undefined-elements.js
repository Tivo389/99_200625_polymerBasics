import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class StyleUndefinedElements extends PolymerElement {
  constructor() {
    super();
    // 01: Set time out to mimic loading sequence
    setTimeout(() => {
      this.removeAttribute('unresolved');
    }, 3000);
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
        /* 02: Applied to both to prevent position glitch */
        :host::before, :host([unresolved])::before {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
          background-color: var(--color-gray);
          border-radius: var(--border-radius-md);
          align-items: center;
          font-size: 64px;
          content: '⏳';
          display: flex;
          justify-content: center;
          transition-duration: var(--duration-lg);
        }
        :host::before {
          opacity: 0;
        }
        :host([unresolved])::before {
          opacity: 1;
        }
      </style>
      <h3>Style Undefined Elements</h3>
    `;
  }
}
customElements.define('style-undefined-elements', StyleUndefinedElements);