const styleModule = document.createElement('dom-module');
styleModule.innerHTML = `
  <template>
    <style>
      h3 {
        color: var(--color-blue);
        margin: 0;
        font-family: sans-serif;
        text-transform: uppercase;
        user-select: none;
        transition-duration: var(--duration-lg);
      }
    </style>
  </template>
`;
styleModule.register('style-module-index');