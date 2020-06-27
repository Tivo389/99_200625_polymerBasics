import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class BasicButton extends PolymerElement {
  constructor() {
    super();
  }
  static get template () {
    return html`
      <style>
        button {
          background: var(--color-white);
          border-radius: 999px;
          border: none;
          color: var(--color-black);
          cursor: pointer;
          font-family: sans-serif;
          font-size: 1rem;
          margin: 1em;
          padding: 1em 2em;
          text-align: center;
          transition-duration: var(--duration-sm);
        }
        button:hover {
          transform: translateY(2px);
        }
        button:active {
          transform: translateY(4px);
        }
        button:focus {
          outline: none;
        }
        :host-context(.active) button {
          background: var(--color-gold);
          color: var(--color-white);
        }
      </style>
      <button type="button" role="button">
        Click Me
      </button>
    `;
  }
  ready() {
    super.ready();
    this.addEventListener('click', this._handleClick);
  }
  _handleClick(e) {
    document.querySelector('polymer-basics').classList.toggle('active');
  }
}
customElements.define('basic-button', BasicButton);