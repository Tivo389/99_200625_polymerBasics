import {html} from '@polymer/polymer/polymer-element.js';
import {BasicDomTemplate02BaseClass} from './basic-dom-template-02-base-class.js';


class BasicDomTemplate02ChildClass extends BasicDomTemplate02BaseClass {
  constructor() {
    super();
  }
  static get headerTemplate() {
    return html`
      <p>Hi! I am the Child Class 02 / headerTemplate!</p>
      `;
  }
  static get footerTemplate() {
    return html`
      <p>Hi! I am the Child Class 02 / footerTemplate!</p>
      `;
  }
}
customElements.define('basic-dom-template-02-child-class', BasicDomTemplate02ChildClass);