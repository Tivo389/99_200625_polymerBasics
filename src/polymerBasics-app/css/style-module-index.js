const styleModule = document.createElement('dom-module');
styleModule.innerHTML = `
  <template>
    <style>
      :host {
        flex: 0 0 auto;
        margin: 1rem;
        max-width: calc(50% - 2rem);
        width: calc(50% - 2rem);
        box-sizing: border-box;
      }
      h3 {
        color: var(--color-blue);
        margin: 0;
        font-family: sans-serif;
        text-transform: uppercase;
        user-select: none;
        transition-duration: var(--duration-lg);
      }
      ul {
        font-family: sans-serif;
        font-size: 14px;
        padding-inline-start: 1rem;
        color: var(--color-dark-gray)
      }
      li + li {
        margin-top: 0.35em;
      }
    </style>
  </template>
`;
styleModule.register('style-module-index');