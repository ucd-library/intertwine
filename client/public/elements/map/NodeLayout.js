import {forceSimulation, forceCollide, forceLink, forceManyBody} from 'd3-force';


class NodeLayout {

  constructor() {
    this.iterations = 300;
    this.rootNode = {
      id: "root", 
      group: 1, 
      r: 150,
      fx : 250,
      fy : 250
    }
  }

  /**
   * @method setCanvasSize
   * @description set the current size of the canvas/map.  This will be used
   * to set the root nodes center position.  This is also used as a bounding box
   * for all nodes
   * 
   * @param {Number} width
   * @param {Number} height
   */
  setCanvasSize(width, height) {
    this.width = width;
    this.height = height;
    this.rootNode.fx = width / 2;
    this.rootNode.fy = height / 2;
  }

  /**
   * @method setMaskSize
   * @description set the size of the map mask.  This is used by the root node.
   * 
   * @param {Number} radius radius of the mask
   */
  setMaskSize(radius) {
    this.rootNode.r = radius;
  }

  layout(nodes) {
    var {links, nodes} = this._prepare(nodes);
    
    let simulation = forceSimulation(nodes)
      .force("collision", forceCollide().radius(d => d.r || 50))
      .force("link", forceLink()
        .distance(d =>  d.source.id === 'root' ? 0 : 10)
        .id((d) =>  d.id)
      )
      .force("charge", forceManyBody().strength((d) => {
        if( d.id === 'root' ) return d.r * -10; 
        if( d.group === 1 ) return 0; 
        return d.r * -10;
      }))
      .stop();

    simulation.force("link").links(links);
    for (var i = 0; i < this.iterations; i++) {
      simulation.tick();
      nodes.forEach((node) => this._boundNode(node));
    }
  }

  _prepare(nodes) {
    let links = [];
    let fakeNodes = [];

    nodes.forEach(node => {
      if( !node.fake ) return;
      node = node.fake;

      let fid = node.id+'-fake'

      fakeNodes.push({
        id : fid,
        group : 1,
        fx : node.x,
        fy : node.y
      });

      links.push({
        id : 'root:'+fid,
        source : 'root',
        target : fid
      });
      
      links.push({
        id : fid+':'+node.id,
        source : fid,
        target : node.id
      });

      node.group = 2;
      delete node.x;
      delete node.y;
      fakeNodes.push(node);
    });

    fakeNodes.push(this.rootNode);
    return {links, nodes: fakeNodes};
  }

  /**
   * @method _boundNode
   * @description ensure nodes do not render outside the given canvas size
   * 
   * @param {Object} node
   */
  _boundNode(node) {
    if( node.group === 1 ) return;
  
    node.x = Math.max(node.r + 5, Math.min(this.width - node.r - 5, node.x));
    node.y = Math.max(node.r + 5, Math.min(this.height - node.r - 5, node.y));
  }
}

export default new NodeLayout();