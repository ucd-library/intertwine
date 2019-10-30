import { html } from 'lit-element';

export default html`
<style>
  [hidden] {
    display: none !important;
  }

  h1 {
    font-size: 20px;
    font-weight: bold;
    color: var(--color-charcoal);
    line-height: 24px;
  }

  h2 {
    font-size: 17px;
    font-style: italic;
    color: var(--color-charcoal);
    line-height: 22px;
    font-weight: normal;
  }

  h3 {
    font-size: 17px;
    font-weight: bold;
    color: var(--color-charcoal);
    line-height: 22px;
  }

  p {
    color: var(--color-charcoal);
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
  }

  a.internal {
    color: var(--color-charcoal);
  }

  a.external {
    text-decoration: none;
    font-weight: bold;
  }

  button, .btn {
    height: 44px;
    padding: 0 15px;
    color: var(--color-white);
    background-color: var(--color-interface-blue);
    cursor: pointer;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
  }

  button.inverse, .btn.inverse {
    background-color: var(--color-white);
    color: var(--color-interface-blue);
  }

  a.btn {
    text-decoration: none;
  }

  button:hover, .btn:hover {
    background-color: var(--color-secondary-blue);
  }

  button[disabled], .btn[disabled] {
    cursor: not-allowed;
    background-color: var(--color-pewter) !important;
  }

</style>
`;