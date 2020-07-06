const styleModule = document.createElement('dom-module');
styleModule.innerHTML = /*html*/`
  <template>
    <style>
      :host {
        flex: 0 0 auto;
        margin: 1rem;
        max-width: calc(50% - 2rem);
        width: calc(50% - 2rem);
        box-sizing: border-box;
      }
      :host *,
      :host *::before,
      :host *::after {
        box-sizing: inherit;
      }
      button {
        background: var(--color-white);
        border-radius: 999px;
        border: none;
        color: var(--color-black);
        cursor: pointer;
        font-family: sans-serif;
        font-size: 1rem;
        width: 100%;
        max-width: 240px;
        padding: 1em 2em;
        margin: var(--space-unit-lg) 0 0 0;
        text-align: center;
        transition-duration: var(--duration-sm);
      }
      button:hover {
        transform: translateY(2px);
      }
      button:active {
        transform: translateY(4px);
      }
      button:focus {
        outline: none;
      }
      h3 {
        color: var(--color-blue);
        margin: 0;
        font-family: sans-serif;
        text-transform: uppercase;
        transition-duration: var(--duration-lg);
      }
      p {
        text-align: left;
        margin: 0;
      }
      ul {
        font-family: sans-serif;
        font-size: 14px;
        margin: 0;
        padding: 0;
        list-style: inside;
        color: var(--color-dark-gray);
      }
      ul ul {
        padding-left: 1.35em;
      }
      li {
        text-indent: -1.35em;
        margin-left: 1.35em;
      }
      p + p, h3 + p, h3 + ul, p + ul {
        margin-top: var(--space-unit-md);
      }
      li + li, li + ul, ul + li {
        margin-top: var(--space-unit-xs);
      }
    </style>
  </template>
`;
styleModule.register('style-module-index');