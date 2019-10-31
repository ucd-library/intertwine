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
      type : {type : String},
      srctype : {type: String},
      dsttype : {type: String},
      view : {type : String},
      title : {type : String},
      date : {type : String},
      connections : {type: Array},
      isNode : {type: Boolean},
      isLink : {type: Boolean},
      connectionSubjects : {type: Array},
      clusterSubjects : {type: Object},
      clusterSubjectTypes : {type: Array}
    }
  }

  constructor() {
    super();
    
    this.open = true;
    this.date = '';
    this.view = '';
    this.type = '';
    this.srctype = '';
    this.dsttype = '';
    this.connections = [];
    this.isLink = false;
    this.isNode = false;
    
    this.connectionSubjects = [];
    this.clusterSubjectTypes = ['person', 'place', 'object', 'event'];
    this.resetClusterSubjects();
    this.render = render.bind(this);

    this._injectModel('AppStateModel', 'MomentModel');
  }

  /**
   * @method _onGraphUpdate
   * @description bound to graph-update events from the MomentModel
   * 
   * @param {*} e 
   */
  _onGraphUpdate(e) {
    if( e.state !== 'loaded' ) return;
    this.renderState(e.payload);
  }

  _onAppStateUpdate(e) {
    this.moment = e.moment;
    this.selected = e.selected;
    this.renderState();
  }

  firstUpdated() {
    this.descriptionEle = this.shadowRoot.querySelector('#description');
  }

  renderState(graph) {
    if( graph ) this.graph = graph;

    this.isLink = false;
    this.isNode = false;

    if( !this.selected ) {
      this.renderEmpty();
      return;
    }
    if( !this.graph ) return;
    
    this.type = this.selected.type;

    if( this.type === 'cluster' ) {
      if( this.selected.ids ) {
        this.renderCluster(this.selected.ids.map(id => this.graph.nodes[id]));
      }
    } else if( this.type === 'connection' ) {
      this.isLink = true;
      this.renderItem(this.graph.links[this.selected.id]);
    } else {
      this.isNode = true;
      this.renderItem(this.graph.nodes[this.selected.id]);
    }
  }

  renderEmpty() {
    this.view = 'empty'
    this.type = 'empty';
  }

  renderCluster(nodes) {
    this.view = 'cluster';
    this.resetClusterSubjects();
    
    nodes.forEach(node => {
      if( !this.clusterSubjects[node.type] ) return;
      this.clusterSubjects[node.type].enabled = true;
      this.clusterSubjects[node.type].nodes.push(node);
    });
  }

  renderItem(node) {
    this.view = 'item'

    this.title = node.title || '';
    this.location = node.location || '';
    this.date = node.date || '';
    this.descriptionEle.innerHTML = markdown.toHTML(node.description || '');

    if( node.type === 'connection' ) {
      this.connectionSubjects = [
        this.graph.nodes[node.src],
        this.graph.nodes[node.dst]
      ];
      this.srctype = this.connectionSubjects[0].type;
      this.dsttype = this.connectionSubjects[1].type;
    } else {
      // find connections
      let connections = [];
      let link;
      for( let id in this.graph.links ) {
        link = this.graph.links[id];
        if( link.src === node.id ) {
          connections.push({
            link,
            node : this.graph.nodes[link.dst]
          });
        } else if ( link.dst === node.id ) {
          connections.push({
            link,
            node : this.graph.nodes[link.src]
          });
        }
      }
      this.connections = connections;
    }

  }

  renderLink(node) {
    this.type = 'item'
    this.title = node.title;
    this.descriptionEle.innerHTML = markdown.toHTML(node.description || '');
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
   * @method _onToggleKeyUp
   * @description bound to toggle button key-up event
   */
  _onToggleKeyUp(e) {
    if( e.which !== 13 ) return;
    this._fireToggleEvent();
  }

  /**
   * @method _fireToggleEvent
   * @description fire the toggle event.  This is called from
   * _onToggleKeyUp and bound to click event on toggle button
   */
  _fireToggleEvent() {
    this.dispatchEvent(new CustomEvent('toggle'));
  }

}

customElements.define('app-map-info-panel', AppMapInfoPanel);
