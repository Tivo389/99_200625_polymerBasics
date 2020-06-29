import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class BasicButton extends PolymerElement {
  constructor() {
    super();
    // 06: Calling addEventListener upon class initiation
    this.addEventListener('click', this._handleClick);
  }
  static get template () {
    return html`
      <style include="style-module-index">
        :host {
          align-items: flex-start;
          background-color: var(--color-opaque-white);
          border-radius: var(--border-radius-md);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
        }
        /*
        - 07a:
          - This syntax caters for the parent-element (polymer-basics) receiving the active class
          - Not sure as of 200628 if I can narrow down which parent this...
            - Just got an idea... what if I specify the BOTH element AND class?
            - IT WORKED!!!!! CMD+F => '200627 / :HOST CSS STYLING' @20_NOTES_POLYMER.js
        :host-context(.active) button {
          background: var(--color-gold);
          color: var(--color-white);
        }
        */
        /*
        - 07b: This approach narrows the context down to a specific parent-level-element
          - This styling structure may not make sense since this was just for confirmation
        */
        :host-context(polymer-basics.active) {
          background: var(--color-opaque-gray);
        }
        :host-context(polymer-basics.active) button {
          background: var(--color-gold);
          color: var(--color-white);
        }
        button {
          background: var(--color-white);
          border-radius: 999px;
          border: none;
          color: var(--color-black);
          cursor: pointer;
          font-family: sans-serif;
          font-size: 1rem;
          width: 100%;
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
      </style>
      <h3>Basic Button</h3>
      <ul>
        <li>Basic Structure</li>
        <li>Basic :host Styling</li>
        <li>Basic Functions</li>
      </ul>
      <button type="button" role="button">
        Click Me
      </button>
    `;
  }
  // - 08: The general structure for methods is near identical to React.
  //   - Underscore seems to be a Polymer Convention
  //   - https://polymer-library.polymer-project.org/3.0/docs/devguide/properties#private-and-protected-properties
  _handleClick(e) {
    document.querySelector('polymer-basics').classList.toggle('active');
  }
}
customElements.define('basic-button', BasicButton);