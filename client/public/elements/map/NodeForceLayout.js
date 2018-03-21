import {forceSimulation, forceCollide, forceLink, forceManyBody} from 'd3-force';

// runs the D3 force layout simulation 
class NodeForceLayout {

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
   * No node will be allowed inside as we are applying the 'collision' force.
   * 
   * @param {Number} radius radius of the mask
   */
  setMaskSize(radius) {
    this.rootNode.r = radius;
  }

  layout(nodes) {
    // create a D3 graph based on given nodes with the 'fake' attribute
    var {links, nodes} = this._prepare(nodes);
    
    // setup the D3 simulation
    let simulation = forceSimulation(nodes)
      // the forceCollide makes sure nodes don't overlap eachother.
      // basically it treats nodes as circles rather than points
      .force("collision", forceCollide().radius(d => d.r || 50))
      // forceLink applies a force to each link in the graph
      .force("link", forceLink()
        .distance(d =>  d.source.id === 'root' ? this.rootNode.r : 30)
        .strength(d =>  d.source.id === 'root' ? 1 : 0.25)
        .id((d) =>  d.id)
      )
      // forceManyBody is the 'charge' strength for each node (think partical charge)
      // positive charges will attract, negative will repel 
      .force("charge", forceManyBody().strength((d) => {
        if( d.id === 'root' ) return d.r * -10; 
        if( d.group === 1 ) return 0; 
        return d.r * -10;
      }))
      // stop the simulation, we are going to run all at once below.  ie we don't want
      // to run in real time and show animation, we just want to run all at once and
      // render the result
      .stop();

    // add the links to the link force
    simulation.force("link").links(links);

    // for the given number of iterations, run the force layout... this is currently
    // 300, a number from stack overflow but it's open to investigation.
    for (var i = 0; i < this.iterations; i++) {
      // run one 'tick' of the force simulation
      simulation.tick();
      // after each tick, bound the nodes to canvas.  ie, don't let nodes move outside
      // the bounds of the given canvas
      nodes.forEach((node) => this._boundNode(node));
    }
  }

  /**
   * @method _prepare
   * @description given an array of nodes, create a new set of nodes and links.
   * For each node add line from the root (center) to the fake node (the node 
   * that anchors to the mask radius circle).  Then add a line from the fake
   * node to the real node.  Finally add the real node.
   */
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

export default new NodeForceLayout();