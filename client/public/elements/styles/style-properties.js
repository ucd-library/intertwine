import "@polymer/paper-styles/paper-styles"
import "@polymer/paper-styles/default-theme"

import styles from "./style-properties.html"
let styleWrapper = document.createElement('div');
styleWrapper.style.display = 'none';
styleWrapper.innerHTML = styles;
document.head.appendChild(styleWrapper);

// For leaflet or other js code that does styling..
window.APP_STYLE = {
  COLOR : {
    scarlet:        '#EA534B',
    gold:           '#F2AC30',
    vine:           '#1EA866',
    rose:           '#ED77A5',
    grape:          '#BA5B93',
    labelBlue:      '#13607D',
    interfaceBlue:  '#18779B',
    lineBlue:       '#6697B2',
    charcoal:       '#4E4E4E'
  }
} 

// map to types
APP_STYLE.COLOR_BY_TYPE = {
  people : APP_STYLE.COLOR.scarlet,
  person : APP_STYLE.COLOR.scarlet,
  technology : APP_STYLE.COLOR.gold,
  place : APP_STYLE.COLOR.vine,
  event : APP_STYLE.COLOR.rose,
  object : APP_STYLE.COLOR.grape
}