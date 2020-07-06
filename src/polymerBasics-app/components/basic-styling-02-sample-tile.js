import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class BasicStyling02SampleTile extends PolymerElement {
  constructor() {
    super();
  }
  static get template () {
    return html`
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
          --tile-font-family: var(--header-font-family);
          --tile-font-size: var(--font-size-md);
          --tile-font-weight: var(--font-weight-bolder);
          --tile-margin: 0 0 var(--space-unit-sm) 0;
          --tile-padding: 0 0 var(--space-unit-sm) 0;
          border-bottom: var(--tile-border-bottom);
          font-family: var(--tile-font-family);
          font-size: var(--tile-font-size);
          font-weight: var(--tile-font-weight);
          margin: var(--tile-margin);
          padding: var(--tile-padding);
        }
        p {
          --tile-font-family: var(--body-font-family);
          --tile-margin: 0;
          --tile-padding: 0;
          --tile-line-height: var(--line-height-mobile);
          font-family:var(--tile-font-family);
          margin: var(--tile-margin);
          padding: var(--tile-padding);
          line-height:var(--tile-line-height);
        }
      </style>
      <div class="sampleTile">
        <h4 class="sampleTileHeader">Separation of Concerns / Alpha</h4>
        <p class="sampleTileBody">In computer science, separation of concerns (SoC) is a design principle for separating a computer program into distinct sections such that each section addresses a separate concern.</p>
      </div>
    `;
  }
}
customElements.define('basic-styling-02-sample-tile', BasicStyling02SampleTile);