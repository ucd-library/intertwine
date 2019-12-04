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
      momentInfo : {type: Object},
      momentEntryPointUrl : {type: String},
      type : {type : String},
      srctype : {type: String},
      dsttype : {type: String},
      view : {type : String},
      title : {type : String},
      date : {type : String},
      connections : {type: Array},
      isNode : {type: Boolean},
      isLink : {type: Boolean},
      isMoment : {type: Boolean},
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
    this.isMoment = false;
    this.moment = '';
    this.momentInfo = {};
    this.momentEntryPointUrl = '';

    this.connectionSubjects = [];
    this.clusterSubjectTypes = ['person', 'place', 'object', 'event'];
    this.resetClusterSubjects();
    this.render = render.bind(this);

    this._injectModel('AppStateModel', 'MomentModel');
  }

  /**
   * @method _onMomentGraphUpdate
   * @description bound to graph-update events from the MomentModel
   *
   * @param {*} e
   */
  _onMomentGraphUpdate(e) {
    if( e.state !== 'loaded' ) return;
    this.renderState(e.payload);
  }

  async _onAppStateUpdate(e) {
    this.moment   = e.moment;
    this.selected = e.selected;
    this.renderState();
  }

  firstUpdated() {
    this.descriptionEle = this.shadowRoot.querySelector('#description');
    this.momentDescEle  = this.shadowRoot.querySelector('#momentDescription');
  }

  renderState(moment) {
    if( moment ) {
      this.momentInfo = moment;
      this.momentDescEle.innerHTML = markdown.toHTML(moment.description || '');

      this.momentEntryPointUrl = '';

      if( moment.entryPoint ) {
        for( let id in moment.graph.nodes ) {
          let node = moment.graph.nodes[id];
          if( node.id !== moment.entryPoint ) continue;
          this.momentEntryPointUrl = `/map/${this.moment}/${node.type}/${node.id}`;
          break;
        }
      }

      this.graph = moment.graph;
    }

    this.isLink = false;
    this.isNode = false;
    this.isMoment = false;

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
    this.resetClusterSubjects();

    nodes.forEach(node => {
      if( !this.clusterSubjects[node.type] ) return;
      this.clusterSubjects[node.type].enabled = true;
      this.clusterSubjects[node.type].nodes.push(node);
    });
  }

  renderItem(node) {
    this.view = 'item';

    this.title = node.name || '';
    this.location = node.location || '';
    this.date = node.temporal || '';

    if ( node.description !== false ) {
      this.descriptionEle.innerHTML = markdown.toHTML(node.description || '');
    }

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

      connections.sort((a, b) => {
        if( a.node.name < b.node.name ) return -1;
        if( a.node.name > b.node.name ) return 1;
        return 0;
      });

      this.connections = connections;
    }
  }

  renderLink(node) {
    this.type = 'item'
    this.title = node.name;
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
