import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './basic-dom-templating-base-class.js';
import './basic-dom-templating-child-class.js';

class BasicDomTemplating extends PolymerElement {
  constructor() {
    super();
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
        h3 {
          margin-bottom: var(--space-unit-md);
        }
      </style>
      <h3>Basic Base & Child Class</h3>
      <ul>
        <li>Didn't expect <code>$&#123;super.template&#125;</code> to also include the <code>&lt;style&gt;</code>. I thought styles would be hoisted together.</li>
        <li>However, this does lead to an odd DOM structure like <code>&lt;style&gt;</code><code>&lt;p&gt;</code><code>&lt;style&gt;</code><code>&lt;p&gt;</code><code>&lt;p&gt;</code>, which can be an issue with structure-oriented css like <code>p + p</code>...</li>
        <li>There are 2 approaches that come to mind...</li>
        <ul>
          <li>01: Treat the child class purely as modular element and define the style all in the base class. This approach treats the base as the primary class and helps keep the style consolidated.</li>
          <li>02: Apply structure oriented styling in the base class, and apply class-level elements per class. This approach is probably better for complex components but I get the impression this approach can be more likely to have style issues.</li>
        </ul>
      </ul>
      <basic-dom-templating-base-class></basic-dom-templating-base-class>
      <hr>
      <basic-dom-templating-child-class></basic-dom-templating-child-class>
    `;
  }
}
customElements.define('basic-dom-templating', BasicDomTemplating);