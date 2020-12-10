import { LitElement } from 'lit-element';
import render from "./app-map-info-panel.tpl.js"
import {markdown} from "markdown"

import "@polymer/iron-icons"

export default class AppMapInfoPanel extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      open : {
        type: Boolean,
        reflect: true
      },
      moment : {type: String},
      momentEntryPoint : { type: Object },
      momentEntryPointUrl : {type: String},
      endpoint: { type: String },
      type : {type : String},
      srctype : { type: String },
      srcthumb: { type: String },
      dsttype : { type: String },
      dstthumb: { type: String },
      view : {type : String},
      title : {type : String},
      date : {type : String},
      // events: { type: Array },
      connections : {type: Array},
      isNode : {type: Boolean},
      isLink : {type: Boolean},
      isMoment : {type: Boolean},
      relatedLinks: { type: Array },
      imageCreditLink: { type: String },
      imageCreditTitle: { type: String },
      selectedIndex: { type: Number },
      hasConnections: { type: Boolean },
      connectionSubjects : {type: Array},
      clusterSubjects : {type: Object},
      clusterSubjectTypes : {type: Array}
    }
  }

  constructor() {
    super();

    this.moment = '';
    this.momentEntryPoint = {};
    this.momentEntryPointUrl = '';
    this.open = true;
    this.resetUi();

    this.endpoint = APP_CONFIG.endpoint;

    this.hasConnections = false;
    this.connectionSubjects = [];
    this.clusterSubjectTypes = ['person', 'place', 'object', 'event'];

    this.render = render.bind(this);

    window.addEventListener('keyup', (e) => {      
      if ( e.key === 'Escape' ) this._returnToMainInfoPanel();
    });

    this._injectModel('AppStateModel', 'MomentModel');
  }

  resetUi() {
    this.title = '';
    this.date = '';
    this.view = '';
    this.type = '';
    this.description = '';
    this.thumbnail = '';
    this.srctype = '';
    this.srcthumb = '';
    this.dsttype = '';
    this.dstthumb = '';
    this.connections = [];
    this.isLink = false;
    this.isNode = false;
    this.isMoment = false;
    this.relatedLinks = [];
    this.imageCreditLink  = '';
    this.imageCreditTitle = '';

    // check elements have been loaded
    if( this.singleImage ) {
      this.singleImage.style.backgroundImage = 'initial';
      this.connectionSrcImg.style.backgroundImage = 'initial';
      this.connectionDstImg.style.backgroundImage = 'initial';
      this.contentEle.scrollTo(0,0);
    }
    // this.events  = [];

    this.resetClusterSubjects();
  }

  resetClusterSubjects() {
    this.clusterSubjects = {
      person : {
        enabled : false,
        label : 'People',
        nodes : []
      },
      place : {
        enabled : false,
        label : 'Places',
        nodes : []
      },
      object : {
        enabled : false,
        label : 'Objects',
        nodes : []
      },
      event : {
        enabled : false,
        label : 'Events',
        nodes : []
      }
    }
  }

  /**
   * @method _onMomentGraphUpdate
   * @description bound to graph-update events from the MomentModel
   *
   * @param {*} e
   */
  _onMomentGraphUpdate(e) {
    if( e.state !== 'loaded' ) return;

    /** TODO: Related to Issue #54 */
    if ( this.moment === e.id ) {
      this.renderState(e.payload);
    }
    
  }

  async _onAppStateUpdate(e) {
    if ( this.moment === e.moment && this.selected === e.selectedNode ) {
      return;
    }

    this.moment = e.moment;
    this.selected = e.selectedNode;

    let state = await this.MomentModel.get(this.moment);

    this.renderState(state.payload);
  }

  firstUpdated() {
    this.descriptionEle = this.shadowRoot.querySelector('#description');
    this.momentDescEle  = this.shadowRoot.querySelector('#momentDescription');
    this.singleImage    = this.shadowRoot.querySelector('#singleImage');
    this.connectionSrcImg = this.shadowRoot.querySelector('#connection-src-image');
    this.connectionDstImg = this.shadowRoot.querySelector('#connection-dst-image');
    this.contentEle = this.shadowRoot.querySelector('.content');
  }

  updated() {
    if ( this.isLink ) this.title = '';
    if ( this.connections.length > 0 ) this.hasConnections = true;
    else this.hasConnections = false;
  }

  onSelectedClusterZoomChange(visible) {
    if( visible ) this.renderState();
    else this.renderEmpty();
  }

  renderState(moment) {
    if( moment ) {
      this.momentGraph = moment;     

      let momentEntryPoint;
      if ( Object.keys(this.momentGraph.graph.story).length !== 0 ) {
        momentEntryPoint = this.momentGraph.graph.story.entrypoint;
      }

      if ( momentEntryPoint ) {
        this.momentEntryPoint = momentEntryPoint;
        this.momentDescEle.innerHTML = markdown.toHTML(momentEntryPoint.description);
      }

      this.graph = moment.graph;
    }

    this.resetUi();

    if( !this.selected ) {
      this.renderEmpty();
      return;
    }

    if( !this.graph ) return;

    /** TODO: This checker may become unnecessary once I 
     * figure out the problems w/the mulitiple moments all 
     * loading at the same time */
    
    /** Compare the current URL location to the current 
      selected id to make sure we're on the same page */
    // let locArray = window.location.pathname.split('/');
    // let _id = locArray[locArray.length - 1];
    // if ( _id !== this.selected.id ) {
    //   /** Reset the thumbnails and background images so if
    //   the user has navigated to a new item the old image
    //   isn't displayed. */
    //   this.thumbnail = '';
    //   this.singleImage.style.backgroundImage = 'initial';
    //   this.connectionSrcImg.style.backgroundImage = 'initial';
    //   this.connectionDstImg.style.backgroundImage = 'initial';
    //   this.imageCreditLink  = '';
    //   this.imageCreditTitle = '';
    // }    

    this.type = this.selected.type;

    if( this.type === 'cluster' ) {
      if( this.selected.ids ) {
        this.renderCluster(this.selected.ids.map(id => this.graph.nodes[id]));
      }
    } else if( this.type === 'connection' ) {
      this.isLink = true;
      let selectedNode = this.graph.links[this.selected.id];
      this.renderItem(selectedNode);
    } else {
      this.isNode = true;
      let selectedNode = this.graph.nodes[this.selected.id];
      this.renderItem(selectedNode);
    }
  }

  renderEmpty() {
    if( !this.moment ) {
      this.view = 'empty'
      this.type = 'empty';
      return;
    }
    this.type = 'moment';
    this.view = 'moment';
    this.isMoment = true;
  }

  renderCluster(nodes) {
    this.view = 'cluster';

    nodes.forEach(node => {
      if( !this.clusterSubjects[node.type] ) return;

      this.clusterSubjects[node.type].enabled = true;
      this.clusterSubjects[node.type].nodes.push(node);
    });

    // Alphabetize the clusterSubjects
    for (let attr in this.clusterSubjects) {
      this.clusterSubjects[attr].nodes.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }

    this.thumbnail = '';
    this.singleImage.style.backgroundImage = '';
  }

  renderItem(node) {
    if ( !node ) return;

    this.view = 'item';
    this.title = node.name || '';

    if ( node['schema:spatial'] ) {
      this.location = node['schema:spatial'];
    } else {
      this.location = node.location || '';
    }

    let temporal = '';
    if ( node.temporal !== undefined ) {
      temporal = node.temporal.replace('/', ' - ');
    }
    this.date = temporal || '';

    // TODO: Some of the descriptions are like this: description: @id: http://link.com
    //       So weeding those out by testing to see if they're strings first
    //       Otherwise markdown breaks
    if ( node.description !== false && node.description !== undefined && typeof node.description === 'string' ) {
      this.descriptionEle.innerHTML = markdown.toHTML(node.description);
    } else {
      this.descriptionEle.innerHTML = markdown.toHTML('');
    }

    if ( node.thumbnail ) {     
      this.thumbnail = this.endpoint + '/' + this.moment + '/' + node.thumbnail.replace('z:', '');
      this.singleImage.style.backgroundImage = 'url("' + this.thumbnail + '")';
    }

    this.imageCreditTitle = '';
    this.imageCreditLink = '';
    if ( node.creator && node.creator.length ) {
      this.imageCreditLink  = node.creator[0].url;
      this.imageCreditTitle = node.creator[0].name;
    }

    if ( node.relatedLink ) {
      let re = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)/;
      this.relatedLinks = node.relatedLink.map((v, i) => {
        return {
          fullLink: v.url,
          shortLink: v.url.replace(re, '').split('/')[0],
          title: v.name
        }
      });
    }

    if( node.type === 'connection' ) {
      this.connectionSubjects = [
        this.graph.nodes[node.src],
        this.graph.nodes[node.dst]
      ];
      this.srctype = this.connectionSubjects[0].type;
      this.dsttype = this.connectionSubjects[1].type;

      if ( this.connectionSubjects[0].thumbnail ) {
        this.srcthumb = this.endpoint + '/' + this.moment + '/' + this.connectionSubjects[0].thumbnail.replace('z:', '');
        this.connectionSrcImg.style.backgroundImage = 'url(' + this.srcthumb + ')';
      }

      if ( this.connectionSubjects[1].thumbnail ) {
        this.dstthumb =  this.endpoint + '/' + this.moment + '/' + this.connectionSubjects[1].thumbnail.replace('z:', '');
        this.connectionDstImg.style.backgroundImage = 'url(' + this.dstthumb + ')';
      }

    } else {
      let connections = [], link = {};

      for ( let id in this.graph.links ) {        
        link = this.graph.links[id];

        if ( link.src === node['@id'] ) {
          // JM - not sure what this is, but causing link issues, see issue #63
          // if ( !this.graph.nodes[link.dst] ) {               
            connections.push({
              id: link['@id'],
              connection: link['@type'][0].replace('ucdlib:','').replace('_', ' '),
              dst: link.dst,
              src: link.src,
              name: this.graph.nodes[link.dst].name,
              type: this.graph.nodes[link.dst].type
            });
          // }
        } else if ( link.dst === node['@id'] ) {
          for ( let attr in this.graph.nodes[link.src] ) {
            if ( this.graph.nodes[link.src][attr] === link.dst ) {
              connections.push({
                id: attr,
                connection: this.graph.reverses[attr + ':_rev'].name,
                name: this.graph.nodes[link.src].name,
                type: this.graph.nodes[link.src].type
              });
            }
          }
        }
      }

      // Sort the connections by type
      connections.sort((a, b) => (a.type > b.type) ? 1 : -1);

      this.connections = connections;
    }
  }

  renderLink(node) {
    this.type = 'item'
    this.title = node.name;
    this.descriptionEle.innerHTML = markdown.toHTML(node.description || '');
  }

  /**
   * @method _returnToMainInfoPanel(
   * @description - 2 steps. 
   *  1. hides label displayed on map
   *  2. returns use to info panel home page for selected story
  */
  _returnToMainInfoPanel() {
    this.AppStateModel.setLocation('/map/'+ this.moment +'/');
  }

  /**
   * @method _onToggleKeyUp
   * @description bound to toggle button key-up event
   * TODO: we may be able to remove this
   */
  _onToggleKeyUp(e) {
    /*
    if( e.which !== 13 ) return;
    this._fireToggleEvent();
    */
  }

  /**
   * @method _fireToggleEvent
   * @description fire the toggle event.  This is called from
   * _onToggleKeyUp and bound to click event on toggle button
   */
  _fireToggleEvent() {
    this.dispatchEvent(new CustomEvent('toggle'));
  }

  /**
   * @method _onLinkMouseOver
   * @description bound to mouseover events on Explore Connections list
   */
  _onLinkMouseOver(e) {
    let id = e.currentTarget.getAttribute('cid');
    this.dispatchEvent(new CustomEvent('link-hover', {
      detail : {
        hover: true,
        link : id
      }
    }));
  }

  /**
   * @method _onLinkMouseOut
   * @description bound to mouseout events on Explore Connections list
   */
  _onLinkMouseOut(e) {
    let id = e.currentTarget.getAttribute('cid');
    this.dispatchEvent(new CustomEvent('link-hover', {
      detail: {
        hover: false,
        link : id
      }
    }));
  }
}

customElements.define('app-map-info-panel', AppMapInfoPanel);
