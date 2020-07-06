const styleModule = document.createElement('dom-module');
styleModule.innerHTML = /*html*/`
  <template>
    <style>
      h4 {
        font-family: var(--header-font-family);
        font-weight: var(--font-weight-bolder);
      }
      p {
        font-family: var(--body-font-family);
        line-height: var(--line-height-mobile);
      }
    </style>
  </template>
`;
styleModule.register('style-module-global-element-component');