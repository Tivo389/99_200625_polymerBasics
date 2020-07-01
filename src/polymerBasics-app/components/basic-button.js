import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class BasicButton extends PolymerElement {
  constructor() {
    super();
    // 06: Calling addEventListener upon class initiation
    this.addEventListener('click', this._handleElementClick);
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
      </style>
      <h3>Basic Button</h3>
      <ul>
        <li>Basic Structure</li>
        <li>Basic :host Styling</li>
        <li>Basic Functions</li>
      </ul>
      <button type="button" role="button" on-click="_handleButtonClick">
        Click Me
      </button>
    `;
  }
  // - 08: The general structure for methods is near identical to React.
  //   - Underscore seems to be a Polymer Convention
  //   - https://polymer-library.polymer-project.org/3.0/docs/devguide/properties#private-and-protected-properties
  _handleElementClick() {
    console.log('_handleElementClick called!');
  }
  _handleButtonClick() {
    document.querySelector('polymer-basics').classList.toggle('active');
  }
}
customElements.define('basic-button', BasicButton);