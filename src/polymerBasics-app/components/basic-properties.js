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
        value: false,
        observer: '_observerAwakeProperty'
      },
      awakeStatus: {
        type: String,
        value: 'asleep',
        computed: '_computeAwakeProperty(awake)',
      }
    }
  }
  // 02: Computed is called as the awake-property value is toggle in step 01
  _computeAwakeProperty(awake) {
    console.log('---------------------');
    console.log('_computeAwakeProperty');
    console.log("This is called when the computed-property's method-argument value changes.");
    return awake ? 'awake' : 'asleep';
  }
  // 03: Observer is called at the end (by default?) since the value was toggled in step 01
  _observerAwakeProperty() {
    console.log('---------------------');
    console.log('_observerAwakeProperty');
    console.log("This is called when the property's value changes.")
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
      <!-- 04: The status updated triggered in step 01 get's reflected here -->
      <p>My name is [[firstName]] [[lastName]],<br>I am currently [[awakeStatus]].</p>
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
  // 01: On button click, toggle the awake-property of this class.
  _handleButtonClick() {
    this.awake = !this.awake;
  }
}
customElements.define('basic-properties', BasicProperties);