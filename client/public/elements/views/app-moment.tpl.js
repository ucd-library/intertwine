import { html } from 'lit-element';
import sharedStyles from './../styles/shared-styles'

import '@polymer/iron-icon';
import '@polymer/iron-icons';

import "./app-moment-float-btn";

export default function render() {
  return html`
    ${sharedStyles}
    <link rel="stylesheet" type="text/css" href="/elements/styles/custom_styles.css">
    <style>
      :host {
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    </style>
    <div id="container" class="container" role="main">
      <header>
        <div class="header-image"></div>
        <div class="moment-header">
          <ul>
            <li style="text-align: right;">
              <h4>moments in wine history</h4>
              <h2 class="inverse">Growth of Chardonnay</h2>
            </li>

            <li>
              <div class="quote">
                "Since Chardonnay has been from time immemorial the
                great white grape variety of the Burgundy district of
                France, it is surprising how short its history is as
                a major factor in the California wine scene.
                <ul class="credit">
                  <li>
                    Eleanor McCrea<br />
                    of California Sotheby Book of California Wine (1984)
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </header>

      <div style="position: -webkit-sticky; position: sticky; top: 100%; z-index: 1; bottom: 0;">
        <app-moment-float-btn id="floatBtn"></app-moment-float-btn>
      </div>

      <section class="text-blocks bg-white">
        <p>
          Though some records indicate that Chardonnay was present in California during the mid–late 19th century, it had
          a very limited role. Producers like Stony Hill Vineyard and Hanzell began to work with the grape with great
          success in the 1950s, but it existed purely on the margins; in 1960 there were only around 150 documented acres
          of Chardonnay in the state. But its popularity continued to grow at a rapid pace in the 1960s, and after Chateau
          Montelena’s Chardonnay bested some of Burgundy’s most iconic wines in the 1976 Judgment of Paris,
          Chardonnay’s boom was supersonic.
        </p>
        <p>
          The value of the Chardonnay grape to wine producers lies, perhaps counter-intuitively, in its neutrality. The
          notable grape breeder Harold Olmo said of Chardonnay, “There is little in the way of distinct flavor, in either the
          grape or the new wine, until the fruit is almost overripe...However, it is exactly this delicacy and cleanness of
          taste...that make it... a delight to the consumer.”
        </p>
        <p>
          Chardonnay and its parent, Pinot noir, are the two classic varieties used in Champagne, in which Chardonnay’s
          neutral character leaves space for the expression of the mellow aromas developed in the bottle. The finesse of
          fine Chardonnay wines, opined winemaker, Eleanor Mcrea, “is as unmistakable as Beethoven, [yet] there are many
          variations on the theme.” That Chardonnay “responds gracefully to many approaches” makes it a canvas for the
          expression of vineyard and vinification. While some pioneering Chardonnay producers in California sought to
          reproduce the high acid, crisp style of Chablis, or of the richer quality of Burgundy white, still others have worked
          with riper grapes, acid-lowering malolactic fermentation and oak-barrel aging to develop the now familiar
          “California Style.”
        </p>
      </section>

      <section class="text-image-pairing bg-tan">
        <div class="wine-harvest">
          <span>Stanley Ranch Vineyards</span>
        </div>

        <div class="text-blocks">
          <h1>
            From 300 Acres to 100,000
          </h1>
          <p>
            At the start of the 1960s there were only 300 acres of Chardonnay planted in all of California.
            Today the grape is planted to more than 100,000 acres.
          </p>
          <p>
            The California Chardonnay that wine writer Hugh Johnson describes in Vintage: The Story of Wine
            as having the “buttery, half-smoked aromas and flavours that had … spelt only Meursault,
            Montrachet, and Corton-Charlemagne” didn’t have a well-defined presence in California until after
            Joseph Heitz bought, blended, and sold James D. Zellerbach’s last vintages, and showed that
            California could produce wine that would stand up to top white Burgundies.
          </p>
          <p>
            Timing, skill, doggedness, a knack for promotion, and the Judgment of Paris propelled Heitz’s
            Chardonnays into an international arena, but the stage for Chardonnay’s rise in California had
            been set decades before Prohibition, in Livermore, by a group of immigrant winemakers and a San
            Franciscan whose dry white wine won California’s first international wine award at the 1889 Paris
            Exposition.
          </p>
        </div>
      </section>

      <section class="text-blocks bg-white">
        <h1>
          Chardonnay Comes to California
        </h1>
        <p>
          Chardonnay’s presence among early California wines is hard to trace due to the absence of varietal labeling
          before the 1930s, variations on the grape’s spelling, and mistakes in identification. It wasn’t uncommon for
          Chardonnay to be mistaken for Pinot Blanc and Melon de Bourgogne.
        </p>
        <p>
          The grape’s stateside story begins to come into focus in 1882, when Charles Wetmore imported budwood from
          Meursault and established his Cresta Blanca vineyard in Livermore. Chardonnay roots developed in Livermore
          nurseries and vineyards as well as in the Santa Cruz Mountains, where Livermore winegrower Paul Masson
          planted a second vineyard to Pinot Noir and Chardonnay, using cuttings from Burgundy purportedly from the
          vineyards of winegrower Louis Latour
        </p>
      </section>

      <div class="triptych">
        <div><span>1806 Cresta Blanca Farm</span></div>
        <div><span>Prohibition</span></div>
        <div><span>The Wente Family</span></div>
      </div>

      <section class="text-blocks bg-white">
        <h1>
          Prohibition
        </h1>
        <p>
          During Prohibition, vineyards planted to white varieties were pulled up and the land was planted to durable
          cultivars that could better survive cross-continental transportation, such as Alicante Bouschet. In “The Story of
          California Chardonnay,” wine writer Elaine Chukan Brown notes that “In the grape harvest report of 1930, total
          vineyard acreage in California was around 600,000 acres, with the statewide total of white grapes planted, across
          all varieties, being just 7,000 acres, consisting primarily of Riesling and Sémillon. Plantings of Chardonnay were
          so small that the variety was not recorded specifically.”
        </p>
        <p>
          By the end of Prohibition the Wente and Masson vineyards were the only substantial sources for Chardonnay
          budwood in California.
        </p>
      </section>

      <section class="text-image-pairing bg-tan">
        <div class="text-blocks">
          <h1>
            Chardonnay's Rise
          </h1>
          <p>
            After Prohibition, an insistence on varietal labeling by men like Frank Schoonmaker, the Wentes,
            and Martin Ray led to Chardonnay’s acknowledgment nationally as a distinct wine of value.
          </p>
          <p>
            The story of a private dinner in Rome, in 1960, during which Hanzell’s 1957 Chardonnay stood up
            to a 1955 Corton Charlemagne, circulated among California vintners, and after Zellerbach died, in
            1963, winegrower Joseph Heitz purchased the last of his vintages at auction.
          </p>
          <p>
            Heitz’s acumen as a businessman and winemaker; the publication of the first volume of Julia
            Child’s book Mastering the Art of French Cooking, in 1961, with volume 2 following in 1970; and
            the Judgment of Paris were further fuel for Chardonnay’s rise. The rest, as they say, is history
          </p>
        </div>
        <div class="wentechardonnay"></div>
      </section>

      <footer>
        <div class="map-wrapper w-100 d-flex">
          <div class="map w-50"></div>
          <div class="explore-map w-50">
            <iron-icon class="explore-map-icon" icon="intert-wine-icons:explore"></iron-icon>
            <span style="display: inline-block;">
              <h6>Explore the Map</h6>
              <h2 class="inverse">Growth of Chardonnay</h2>
            </span>
            <br />
            Learn more about how the people, locations, and wines are connected to the growth of Chardonnay via the network
            map of this moment in wine history.
            <br /><br />
            <a class="btn inverse">Launch Map</a>
          </div>
        </div>

        <div class="bottom-content">
          <h6>Sources</h6>
          <ol>
            <li><em>Elaine C. Brown, "<a href="">The Story of California Wine</a>"</em></li>
            <li><em>Nancy Sweet, FPS, UC Davis, 2007, "<a href="">Chardonnay History and Selections at FPS</a>"</em></li>
            <li><em>Gerald Asher, 1990, "Chadonnay: Buds, Twigs and Clones," Gourmet</em></li>
            <li><em>Thomas Pinney, 1989, A History of Wine in America, Volumes 1 & 2</em></li>
            <li><em>George Taber, 2005, Judgment of Paris: California vs France and the historic 1976 Paris tasting that revolutionized wine</em></li>
          </ol>
      </div>
      </footer>
    </div>
`;}
