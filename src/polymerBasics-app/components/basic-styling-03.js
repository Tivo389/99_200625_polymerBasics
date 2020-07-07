import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './basic-styling-03-sample-tile';

class BasicStyling03 extends PolymerElement {
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
      </style>
      <h3>basic-styling-03</h3>
      <ul>
        <li><b>200706 / Global-Element-Component Structure Review</b></li>
        <li>This approach definitely make things more maintainable. However, it also gives rise to the question of which properties make sense as element-level, which ones at component-level, or both.</li>
        <li>In comparison to Basic Styling 02, this approach reflects the global, element, and component-level separation better.</li>
        <li>A secondary issue; I'll call 'recursion' until I find a better name, what initially gets applied as a component-level property-value could later prove better as a global variables. A form of recursive maintenance.</li>
        <li>Although the Code-line count was 23% less in comparison to Basic Styling 02, this still does raise a few questions of efficiency. However, when taking into account the nature of configurable properties/values, this maybe a condition and not a side-effect. When properties need to be configurable, the structure will require a replaceable value.</li>
        <ul>
          <li>Component Level = 1</li>
          <li>Global & Component Level = 2</li>
          <li>Global, Element, and Component Level = 3</li>
        </ul>
        <li>The observation that this is more work is correct. However, the perspective is incorrect. We need to keep in mind that we're not developing or designing a website. We're building a design system. The nature of a system that is intended to be used by people in different fields not familar to development, requires that it be maintainable and accessible by both current and future point of contacts. Such a requirement needs an intermediary feature, a bridge that increases accessbility. In this case, css variables are that intermediary.</li>
        <li>The additional work is not a result of inefficiency but a natural requirement for increased accessbility. This is not the same as conventional development where the primary point of human contact with the code is likely performed by developers.</li>
        <li><b>An odd idea, would configuration via style-module be a potential idea? Probably not a day-to-day option but seems useful for customization.</b></li>
      </ul>
      <basic-styling-03-sample-tile></basic-styling-03-sample-tile>
    `;
  }
}
customElements.define('basic-styling-03', BasicStyling03);