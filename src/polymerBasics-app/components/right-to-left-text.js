import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
// 01: DirMixin has to be added to use :dir() styling
import {DirMixin} from '@polymer/polymer/lib/mixins/dir-mixin.js';

// 02: Add DirMixin and pass PolymerElement as an argument
class RightToLeftText extends DirMixin(PolymerElement) {
  constructor() {
    super();
    // 03: Click to add attributes
    this.addEventListener('click', this._handleClick);
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
        /* 04: When :dir() selector is applied change the color to red. */
        :host(:dir(rtl)) h3 {
          color: var(--color-red);
        }
      </style>
      <h3>عندما يريد العالم أن ‪يتكلّم ‬ ، فهو يتحدّث بلغة يونيكود. تسجّل الآن لحضور المؤتمر</h3>
      <button type="button" role="button" on-click="_handleButtonClick">
        Click Me
      </button>
    `;
  }
  _handleButtonClick(e) {
    const html = document.querySelector('html');
    let htmlHasDirAttribute = document.querySelector('html').hasAttribute('dir');
    if (htmlHasDirAttribute) {
      html.removeAttribute('dir');
      html.setAttribute('lang','en');
    } else {
      html.setAttribute('dir','rtl');
      html.setAttribute('lang','ar');
    }
  }
}
customElements.define('right-to-left-text', RightToLeftText);