import nodeStore from "../../../lib/stores/NodeStore"

export default class MapLink {

  constructor(data, layer, clusterLayer) {
    this.layer = layer;
    this.data = data;
    this.feature = this.layer.addLine({x:0,y:0}, {x:0,y:0});
    this.feature.setLabel(data.type);

    nodeStore.addLink(this);

    // make sure line is in correct location after the
    // cluster layer finished animation
    clusterLayer.on('animationend', () => this.render());
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