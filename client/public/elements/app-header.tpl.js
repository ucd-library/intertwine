import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
    height: 60px;
    background-color: black;
    color: white;
    z-index: 10000;
  }
  .layout {
    margin: 0 0 0 20px;
    display: flex;
    height: 100%;
    align-items: center;
  }
  
  h1 {
    font-weight: 400;
    margin: 0;
    padding: 0;
    flex: 1;
  }
  .title-extra {
    font-weight: 200;
  }

  a {
    cursor: pointer;
    text-transform: capitalize;
    display: inline-block;
    margin: 0 10px;
  }

  .image {
    padding: 15px 20px;
    background-color: var(--app-color-interface-blue );
  }

  img {
    vertical-align: middle;
  }

  @media(max-width: 825px) {
    .title-extra {
      display: none;
    }
  }
</style>  

<div class="layout">
  <h1><span>intertWINE</span> <span class="title-extra">//  California's Modern Wine Network<span></h1>
  <div style="padding-right: 20px"><a>About</a></div>
  <div class="image">
    <img src="/images/ucd-lib-logo-white.png" />
  </div>
</div>

`;}