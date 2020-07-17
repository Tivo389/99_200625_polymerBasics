const styleModule = document.createElement('dom-module');
styleModule.innerHTML = /*html*/`
  <template>
    <style>
      .styleFromModule {
        background: var(--color-dark-gray);
      }
    </style>
  </template>
`;
styleModule.register('style-from-module');