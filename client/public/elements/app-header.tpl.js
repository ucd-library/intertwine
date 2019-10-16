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
    margin: 0 20px;
    display: flex;
    height: 100%;
    align-items: center;
  }
  h1 {
    margin: 0;
    padding: 0;
    font-size: 22px;
    flex: 1;
  }
  a {
    cursor: pointer;
    text-transform: capitalize;
    display: inline-block;
    margin: 0 10px;
  }

  @media(max-width: 825px) {
    .title-extra {
      display: none;
    }
  }
</style>  

<div class="layout">
  <h1><b>intertWINE</b> <span class="title-extra">//  California's Modern Wine Network<span></h1>
  <div><a>Explore</a></div>
  <div><a>Moments</a></div>
  <div><a>About</a></div>
</div>

`;}