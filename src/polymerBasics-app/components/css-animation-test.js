import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class CSSAnimationTest extends PolymerElement {
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
        .animationContainer {
          width: 200px;
          height: 200px;
          margin: 4rem;
          border-radius: 8px;
          overflow: hidden;
          -webkit-mask-image: -webkit-radial-gradient(white, black);
        }
        .animationBody {
          background: linear-gradient(40deg, rgb(0, 255, 220) 0%, rgb(255, 70, 215) 100%);
          width: 400%;
          height: 100%;
          animation: 3s ease-in-out infinite animationRow;
        }
        @keyframes animationRow {
          0%   { transform: translateX(0);     }
          50%  { transform: translateX(-75%); }
          100% { transform: translateX(0);     }
        }
      </style>
      <h3>CSS Animation Test</h3>
      <ul>
        <li>200708 / Came across an issue where basic CSS animation was jumpy in Safari.</li>
        <li>Good training, so decided to see if I can recreate it here.</li>
        <li>Update, not having the same issue. Seems the one I encountered is environmental?</li>
      </ul>
      <div class="animationContainer">
        <div class="animationBody"></div>
      </div>
    `;
  }
}
customElements.define('css-animation-test', CSSAnimationTest);