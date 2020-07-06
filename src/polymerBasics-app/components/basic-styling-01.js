import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class BasicStyling01 extends PolymerElement {
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
        ul {
          margin: 1rem 0;
          padding: 1rem;
          border: 1px dashed var(--color-gray);
          border-radius: 8px;
        }
        li + ul {
          margin: 0;
          padding-top: var(--space-unit-sm);
          padding-bottom: var(--space-unit-sm);
          border: 0;
        }
      </style>
      <h3>basic-styling-01</h3>
      <ul class="basicStyling01">
        <li>There is a basicStyling01-class-style (background: red;) defined in index.html</li>
        <li>There is a ul-tag-style (border: 1px dashed gray;) defined in the component</li>
        <li>Despite the class-style having higher specificity, it will not be applied as host-level selectors CANNOT BE INHERITED to the shadow.</li>
          <ul>
            <li>However, inheritable style properties like color CAN BE INHERITED from host to shadow. (e.g. body {color: white;})</li>
          </ul>
        <li>There is one case where styles <i>inside the shadow</i> matches an element <i>outside of the shadow</i>. And that is using the :host() or :host-context() pseudoclasses.</li>
          <ul>
            <li>Note that there are 3 (that I know of) host pseudoclasses that look similar, remember to not get confused by them.</li>
            <li>:host / :host() / :host-context()</li>
          </ul>
        <li><b>These pseudoclasses would probably be extremely useful for theme-based styling</b></li>
      </ul>
    `;
  }
}
customElements.define('basic-styling-01', BasicStyling01);