let style = document.createElement('style');
document.head.appendChild(style);
style.innerHTML = `
html {
  --app-color-scarlet : #EA534B;
  --app-color-gold : #F2AC30;
  --app-color-vine : #1EA866;
  --app-color-rose : #ED77A5;
  --app-color-grape : #BA5B93;
  --app-color-interface-blue : #18779B;
  --app-color-secondary-blue : #015E80;
  --app-color-cluster-blue : var(--app-color-secondary-blue);
  --app-color-cluster-blue-alpha : rgba(1, 94, 128, 0.5);
  --app-color-smoke : #F3F2F0;
  --app-color-pewter : #D4DADC;
  --app-color-charcoal : #333333;
  --app-color-stone : #767676;
  --app-color-black : #000000;
  --app-color-white : #FFFFFF;


  --app-primary-color   : var(--app-color-interface-blue);
  --app-background-color : var(--app-color-white);
  --app-text-color      : var(--app-color-black);
  --app-max-width               : 1200px;
  --app-max-text-width          : 650px;
  --app-font-size               : 14px;
  --app-font-size-sm            : 13px;
  --app-font-weight             : 400;
  --app-font-weight-light       : 200;
  --app-font-weight-heavy       : 700;
  --app-layout-sm               : 768px;
  --app-grid-cell-width         : 250px;
  --app-default-outline         : 2px dotted var(--default-secondary-color);
}

body, html {
  /* @apply --paper-font-common-base; */
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size        : var(--app-font-size);
  font-weight      : var(--app-font-weight);
  line-height      : calc(var(--app-font-size) * 1.625);
  margin           : 0;
  padding          : 0;
  background-color : var(--app-background-color);
  color            : var(--app-text-color);
  max-width        : 100vw;
  overflow: hidden;
}
`
