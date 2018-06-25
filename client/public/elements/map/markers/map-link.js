import nodeStore from "../../../lib/stores/NodeStore"

export default class MapLink extends Mixin(BaseMixin)
  .with(EventInterface) {

  constructor(data, layer, clusterLayer) {
    super();

    this.type = 'line';
    this.layer = layer;
    this.data = data;
    this.feature = this.layer.addLine({x:0,y:0}, {x:0,y:0});
    this.feature.setLabel(data.type);

    this.feature.ele.addEventListener('click', () => this._onClick());
    this.feature.ele.addEventListener('mouseover', () => this._onMouseover());
    this.feature.ele.addEventListener('mouseout', () => this._onMouseout());

    nodeStore.addLink(this);

    this._injectModel('GraphModel');
    // bind to model events
    this.ready();
  }

  _onClick() {
    if( this.selected ) this.GraphModel.unselect(this);
    else this.GraphModel.select(this);
  }

  _onMouseover() {
    if( this.selected ) return;
    this.feature.label.style.display = 'block';
    this.feature.arrow.setAttribute('visibility', '');
    this._setEndNodeStates('setMouseover');
  }

  _onMouseout() {
    if( this.selected ) return;
    this.feature.label.style.display = 'none';
    this.feature.arrow.setAttribute('visibility', 'hidden');
    this._setEndNodeStates('clearState');
  }

  _onUnselectNode(e) {
    if( e !== this ) return;
    this.selected = false;
    this.feature.select(false);

    this._setEndNodeStates('clearState', true);
  }

  _onSelectedNodeUpdate(e) {
    if( e !== this ) return;
    this.selected = true;
    this.feature.select(true);

    this._setEndNodeStates('setLinkSelected');
  }

  _setEndNodeStates(method, param) {
    let src = nodeStore.getMap(this.data.src);
    let dst = nodeStore.getMap(this.data.dst);

    // TODO: remove 
    if( !src || !dst ) return;

    src[method](param);
    src.render();

    dst[method](param);
    dst.render();
  }

  destroy()  {
    this.layer.removeLine(this.feature);
    nodeStore.removeLink(this);
  }

  setPoints() {
    let src = nodeStore.getMap(this.data.src);
    let dst = nodeStore.getMap(this.data.dst);

    // TODO: remove 
    if( !src || !dst ) return;

    this.feature.setPoints(
      src.getPoint(),
      dst.getPoint()
    );
  }

}