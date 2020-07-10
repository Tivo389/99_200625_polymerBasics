import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './basic-dom-template-01-base-class.js';
import './basic-dom-template-01-child-class.js';

class BasicDomTemplate01 extends PolymerElement {
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
      <h3>Basic Base & Child Class 01</h3>
      <ul>
        <li>Didn't expect <code>$&#123;super.template&#125;</code> to also include the <code>&lt;style&gt;</code>. I thought styles would be hoisted together.</li>
        <li>However, this does lead to an odd DOM structure like <code>&lt;style&gt;</code><code>&lt;p&gt;</code><code>&lt;style&gt;</code><code>&lt;p&gt;</code><code>&lt;p&gt;</code>, which can be an issue with structure-oriented css like <code>p + p</code>...</li>
        <li>There are a few approaches that come to mind...</li>
        <ul>
          <li>01: Treat the child class purely as modular element and define the style all in the base class. This approach treats the base as the primary class and helps keep the style consolidated.</li>
          <li>02: Apply structure oriented styling in the base class, and apply class-level elements per class. This approach is probably better for complex components but I get the impression this approach can be more likely to have style issues.</li>
          <li>03: Structure the classes and avoid adding <code>$&#123;super.template&#125;</code> between child-class elements.</li>
        </ul>
        <li>UPDATE / On second thought, how Base &amp; Child Class styles are applied should probably be based more like Component and not Elements.</li>
          <ul>
            <li>When you think of it, Class Objects are more like Components. It makes sense the styling approach should also be similar.</li>
            <li>However, I get the impression a Base &amp; Child Class styling structure would be a minority case. Will only do quick review.</li>
          </ul>
      </ul>
      <basic-dom-template-01-base-class></basic-dom-template-01-base-class>
      <hr>
      <basic-dom-template-01-child-class></basic-dom-template-01-child-class>
    `;
  }
}
customElements.define('basic-dom-template-01', BasicDomTemplate01);