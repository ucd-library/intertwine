import { html } from 'lit-element';

export default function render() {
  return html`
    <style>
      :host {
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow-y: auto;
        background-color: var(--app-color-smoke);
        background-image: url('/images/background.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
      }     

      header {
        min-height: 200px;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        flex-shrink: 0;

        background-color: var(--app-color-interface-blue);
        background-image: url('/images/header-connectedicons.svg');
        background-repeat: no-repeat;
        background-size: 1500px 1500px;
        background-position: center center;
      }

      header > div {
        padding-top: 50px;
        padding-bottom: 50px;
        align-self: top;
        width: 50%;
        max-width: 400px;
        line-height: 25px;
        color: var(--app-color-white);
      }

      header > div:first-of-type {
        padding-left: 25px;
        padding-right: 15px;
        text-align: right;
      }

      header > div:last-of-type {
        padding-left: 15px;
        padding-right: 25px;
      }

      header > div > h1 {
        margin: 0;
        padding: 0;
        color: var(--app-color-white);
        font-size: 30px;
        font-weight: normal;
        line-height: 35px;
      }

      .arrow-down {
        margin-bottom: 20px;
        height: 32px;
        position: relative;
        text-align: center;
      }

      .arrow-down::after {
        display: inline-block;
        width: 0;
        height: 0;
        content: '';
        border-top: 20px solid var(--app-color-interface-blue);
        border-right: 20px solid transparent;
        border-left: 20px solid transparent;
      }

      main {
        padding: 0px 25px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }

      main > div {
        margin-left: 7.5px;
        margin-right: 7.5px;
        max-width: 600px;
        margin-bottom: 30px;
      }

      .card {
        height: 100%;
        background-color: var(--app-color-white);
        background-repeat: no-repeat;
        background-position: center center;
      }

      .card .feature-img {
        padding-top: 58%;
        width: 100%;
        max-width: 600px;
        max-height: 350px;

        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }

      .card .content {
        padding: 30px;
        font-size: 15px;
      }

      .card .content h4 {
        margin: 0 0 5px 0;
        font-size: 20px;
      }

      .card .content em {
        font-size: 17px;
      }

      .card .content > p {
        margin: 15px 0 0 0;
        padding: 0;
      }

      .card .footer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        padding: 0 0 30px 0;
        height: auto;
        min-height: 100%;

        color: var(--app-color-interface-blue);
        font-weight: bold;
        font-size: 15px;
        text-transform: capitalize;
        text-align: center;
      }

      .card .footer > button {
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;
        height: 44px;
        cursor: pointer;

        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;

        color: var(--app-color-interface-blue);
        background-color: initial;
        border: initial;
      }

      .card .footer > button:hover {
        color: var(--app-color-secondary-blue);
      }

      .card .footer > button > iron-icon {
        margin: 0 8px;
      }

      .card .footer > button:first-of-type > span:first-of-type {
        order: 0;
      }

      .card .footer > button:first-of-type > iron-icon {
        top: -4px;
        order: 1;
      }

      .card .footer .separator {
        margin: 0 14px 0 10px;
        padding-top: 10px;
        height: 30px;
        border: 1px solid var(--app-color-pewter);
      }

      .card .footer iron-icon {
        font-size: 30px;
      }
      
      @media(max-width: 800px) {
        main > div {
          width: 100%;
        }
      }

      @media (max-width: 590px) {
        header {
          background-image: initial;
        }

        main > div {
          width: 100%;
        }
      }

      @media(max-width: 414px) {
        header {
          flex-wrap: wrap;
        }

        header > div {
          width: 100%;
        }

        header > div:first-of-type {
          padding-top: 30px;
          padding-left: 25px;
          padding-right: 25px;
          padding-bottom: 0;
          text-align: initial;
        }

        header > div:last-of-type {
          padding-top: 15px;
          padding-left: 25px;
          padding-right: 25px;
          padding-bottom: 40px;
        }

        .arrow-down {
          margin-bottom: 0px;
        }

        .arrow-down::after {
          display: none;
        }

        .card .footer > button {
          flex-direction: column;
        }

        .card .footer > button:first-of-type > span:first-of-type {
          order: 1;
        }

        .card .footer > button:first-of-type > iron-icon {
          order: 0;
        }

        .card .footer > button > iron-icon {
          align-self: center;
          margin-bottom: 10px;
        }

        .card .footer .separator {
          height: 60px;
        }
      }
    </style>   

    <section>
      <header>
        <div style="float: left;">
          <h1>
            Enter a Moment in
            <br />
            California Wine History
          </h1>
        </div>
        <div class="text-block" style="float: right; font-size: 17px;">
          Get the story behind the people, places, and things connected to a particular time
          or event in wine history, then dive into an interactive map to explore the
          specific connections between them.
        </div>
      </header>
      <div class="arrow-down"></div>
      <main>
        ${this.moments.map((moment) => html`
          <div>
            <div class="card">
              <div class="feature-img" 
                @click="${e => this._onReadStoryClick(moment.entrypoint.story)}" 
                style="cursor: pointer; background-image: url('${moment.entrypoint.thumbnail}');"></div>
              <div class="content">
                <h4>${moment.entrypoint.name}</h4>
                <em>${moment.entrypoint.temporal}</em>
                <p>${moment.entrypoint.description}</p>
              </div>
              <div class="footer">
                <button
                  name="${moment.entrypoint.story}"
                  title="${moment.entrypoint.name}"
                  type="button"
                  @click="${e => this._onReadStoryClick(e.currentTarget.name)}">
                    <span>Read Story</span>
                    <iron-icon icon="intert-wine-icons:book"></iron-icon>
                </button>
                <span class="separator"></span>
                <button
                  name="${moment.entrypoint.story}"
                  title="${moment.entrypoint.name}"
                  type="button"
                  @click="${e => this._onExploreMapClick(e.currentTarget.name)}">
                    <iron-icon icon="intert-wine-icons:explore"></iron-icon>
                    <span>Explore Map</span>
                </button>
            </div>
            </div>
          </div>
        `)}
      </main>
    </section>
`;}
