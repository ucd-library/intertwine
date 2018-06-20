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

    // make sure line is in correct location after the
    // cluster layer finished animation
    clusterLayer.on('animationend', () => this.render());

    this._injectModel('GraphModel');
    // bind to model events
    this.ready();
  }

  _onClick() {
    if( this.selected ) this.GraphModel.unselect(this);
    else this.GraphModel.select(this);
  }

  _onMouseover() {
    this.feature.label.style.display = 'block';
  }

  _onMouseout() {
    if( this.selected ) return;
    this.feature.label.style.display = 'none';
  }

  _onUnselectNode(e) {
    if( e !== this ) return;
    this.selected = false;
    this.feature.select(false);
  }

  _onSelectedNodeUpdate(e) {
    if( e !== this ) return;
    this.selected = true;
    this.feature.select(true);
  }

  destroy()  {
    this.layer.removeLine(this.feature);
    nodeStore.removeLink(this);
  }

  render() {
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