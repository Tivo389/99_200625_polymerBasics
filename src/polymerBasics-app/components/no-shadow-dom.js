import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class NoShadowDom extends PolymerElement {
  constructor() {
    super();
  }
  static get template () {
    return null;
  }
}
customElements.define('no-shadow-dom', NoShadowDom);