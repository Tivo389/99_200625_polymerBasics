import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class BasicProperties extends PolymerElement {
  constructor() {
    super();
  }
  static get properties () {
    return {
      firstName: {
        type: String,
        value: 'Jon'
      },
      lastName: {
        type: String,
        value: 'Doe'
      },
      awake: {
        type: Boolean,
        value: false
      },
      awakeStatus: {
        type: String,
        value: 'asleep',
        computed: '_computeAwakeProperty(awakeValue)',
        observer: '_observerAwakeProperty'
      }
    }
  }
  _computeAwakeProperty(awakeValue) {
    if (awakeValue) {
      return 'I am awake!';
    } else {
      return 'I am asleep!';
    }
  }
  _observerAwakeProperty() {
    console.log('_awakePropertyObserver called');
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
      </style>
      <h3>Basic Properties</h3>
      <p>My name is [[firstName]] [[lastName]], and I am [[awakeStatus]]</p>
      <ul>
        <li>Basic Properties</li>
        <li>Basic Data-Binding</li>
        <li>Basic Functions</li>
      </ul>
      <button type="button" role="button" on-click="_handleButtonClick">
        Click Me
      </button>

    `;
  }
  _handleButtonClick(e) {
    console.log('You Clicked Me!');
    // 999 CONTINUE HERE TO CHANGE THE PROPERTY!
  }
}
customElements.define('basic-properties', BasicProperties);