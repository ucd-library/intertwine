import { html } from 'lit-element';

export default html`
<style>
  [hidden] {
    display: none !important;
  }

  h1 {
    font-size: 20px;
    font-weight: bold;
    color: var(--app-color-charcoal);
    line-height: 24px;
  }
  h1.inverse {
    color: var(--app-color-white);
  }

  h2 {
    font-size: 17px;
    font-style: italic;
    color: var(--app-color-charcoal);
    line-height: 22px;
    font-weight: normal;
  }
  h2.inverse {
    color: var(--app-color-white);
  }

  h3 {
    font-size: 17px;
    font-weight: bold;
    color: var(--app-color-charcoal);
    line-height: 22px;
  }
  h3.inverse {
    color: var(--app-color-white);
  }

  p {
    color: var(--app-color-charcoal);
    font-size: 15px;
    line-height: 22px;
    padding-bottom: 10px;
  }

  .subject-type {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bold;
  }

  a {
    cursor: pointer;
    font-size: 15px;
    /* display: inline-flex; */
    /* align-items: center; */
  }

  a.internal, a.internal:visited {
    color: var(--app-color-charcoal);
  }

  a.external {
    text-decoration: none;
    font-weight: bold;
  }

  button, .btn {
    height: 44px;
    padding: 0 15px;
    color: var(--app-color-white);
    background-color: var(--app-color-interface-blue);
    cursor: pointer;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
  }

  button.inverse, .btn.inverse {
    background-color: var(--app-color-white);
    color: var(--app-color-interface-blue);
  }

  a.btn {
    text-decoration: none;
  }

  button:hover, .btn:hover {
    background-color: var(--app-color-secondary-blue);
  }
  button.inverse:hover, .btn.inverse:hover {
    background-color: var(--app-color-smoke);
  }

  button[disabled], .btn[disabled] {
    cursor: not-allowed;
    background-color: var(--app-color-pewter) !important;
  }
</style>
`;
