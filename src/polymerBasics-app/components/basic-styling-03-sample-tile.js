import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/style-module-global-element-component.js';

class BasicStyling03SampleTile extends PolymerElement {
  constructor() {
    super();
  }
  static get template () {
    return html`
      <!-- This style module will act as an environment for the element level -->
      <style include="style-module-global-element-component"></style>
      <!-- This style will act as the environment for the component level  -->
      <style>
        :host {
          --tile-background-color: var(--color-white);
          --tile-border-radius: var(--border-radius-md);
          --tile-color: var(--color-black);
          --tile-padding: var(--space-unit-lg);
          --tile-margin: var(--space-unit-lg) 0;
          background-color: var(--tile-background-color);
          border-radius: var(--tile-border-radius);
          color: var(--tile-color);
          padding: var(--tile-padding);
          margin: var(--tile-margin);
        }
        h4 {
          --tile-border-bottom: 1px dashed var(--color-gray);
          --tile-margin: 0 0 var(--space-unit-sm) 0;
          --tile-padding: 0 0 var(--space-unit-sm) 0;
          --tile-font-size-header: var(--font-size-md);
          border-bottom: var(--tile-border-bottom);
          font-size: var(--tile-font-size-header);
          margin: var(--tile-margin);
          padding: var(--tile-padding);
        }
        p {
          --tile-margin: 0;
          --tile-padding: 0;
          margin: var(--tile-margin);
          padding: var(--tile-padding);
        }
      </style>
      <div>
        <h4>Separation of Concerns / Beta</h4>
        <p>In computer science, separation of concerns (SoC) is a design principle for separating a computer program into distinct sections such that each section addresses a separate concern.</p>
      </div>
    `;
  }
}
customElements.define('basic-styling-03-sample-tile', BasicStyling03SampleTile);