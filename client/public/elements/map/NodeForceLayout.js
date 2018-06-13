import {forceSimulation, forceCollide, forceLink, forceManyBody} from 'd3-force';

// runs the D3 force layout simulation 
class NodeForceLayout {

  constructor() {
    this.iterations = 300;
    this.center = {
      id: "center",
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
    this.center.fx = width / 2;
    this.center.fy = height / 2;
  }

  /**
   * @method setMaskSize
   * @description set the size of the map mask.  This is used by the root node.
   * No node will be allowed inside as we are applying the 'collision' force.
   * 
   * @param {Number} radius radius of the mask
   */
  setMaskSize(radius) {
    this.center.r = radius;
  }

  qlayout(nodes) {
    // create a D3 graph based on given nodes 
    var {links, nodes} = this._qprepare(nodes);
    
    // setup the D3 simulation
    let simulation = forceSimulation(nodes);
    simulation.nodes(nodes);
    
    // if (false) ( simulation.nodes().forEach(n=>console.log(n)) );
    
    // setup the D3 simulation
		simulation.velocityDecay(0.2)
      // the forceCollide makes sure nodes don't overlap eachother.
      // basically it treats nodes as circles rather than points
      .force("collision", 
        forceCollide()
          .radius(d => { false && console.log(d); return (d.r || 0)+1})
          .strength(1)
          .iterations(40)
      )
      
       // forceLink applies a force to each link in the graph
      .force("pull-to-edge", 
        forceLink()
          .distance( d => { false && console.log(d); return 25; })
          .strength(d => (d<1) ? 1 : 1/d*d )
          .id((d) =>  d.id)
      )
      
      // stop the simulation, we are going to run all at once below.  ie we don't want
      // to run in real time and show animation, we just want to run all at once and
      // render the result
      // .on("tick",ticked).iterations(
      .stop();

    // for the given number of iterations, run the force layout... this is currently
		// 300, a number from stack overflow but it's open to investigation.
		this.iterations=100;
		for (var i = 0; i < this.iterations; i++) {
			// console.log(`iteration ${i}`);
			// run one 'tick' of the force simulation
      simulation.tick();
      
			// after each tick, bound the nodes to canvas.  ie, don't let nodes move outside
			// the bounds of the given canvas
      // simulation.nodes().forEach((node) => this._boundNode(node.data.forceLayout));
		}
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
        .distance(d =>  d.source.id === 'root' ? this.center.r : 30)
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
  _qprepare(inNodes) {
    let links = [];
		let nodes = [];

		inNodes.forEach(node => {
      node = node.data;

      let layout = node.forceLayout;
      let fid = node.id+'-fake'

      // nodes.push({
      //   id : fid,
      //   group : 1,
      //   r : 0,
      //   fx : layout.circle.cx,
      //   fy : layout.circle.cy
      // });

      nodes.push({
        id : fid,
        group : 1,
        fx : layout.x,
        fy : layout.y
      });

      links.push({
        id : 'center:'+fid,
        source : 'center',
        target : fid
      });


      links.push({
        id : fid+':'+node.id,
        source : fid,
        target : node.id
      });

      // Real Node
      layout.id = node.id;
      layout.group = 2;
      layout.r = 12;
      
			nodes.push(layout);
    });

    nodes.push(Object.assign({}, this.center));
		return {nodes, links};
  }

  _qprepare(inNodes) {
		let links = [];
		let nodes = [];

		inNodes.forEach(node => {
      node = node.data;

      let layout = node.forceLayout;
      let fid = node.id+'-fake'

      nodes.push({
        id : fid,
				group : 1,
				r:0,
        fx : layout.circle.cx,
        fy : layout.circle.cy
      });

      //      links.push({
      //        id : 'center:'+fid,
      //        source : 'center',
      //        target : fid
      //      });

      links.push({
        id : fid+':'+node.id,
        source : fid,
        target : node.id
      });
			// Real Node
			node.group = 2;
			node.r=12;
			nodes.push(node);
    });

    nodes.push(this.center);
		return {nodes,links};
  }

  /**
   * @method _boundNode
   * @description ensure nodes do not render outside the given canvas size
   * 
   * @param {Object} forceLayout
   */
  _boundNode(forceLayout) {
    if( forceLayout.group === 1 ) return;
  
    forceLayout.x = Math.max(forceLayout.r + 5, Math.min(this.width - forceLayout.r - 5, forceLayout.x));
    forceLayout.y = Math.max(forceLayout.r + 5, Math.min(this.height - forceLayout.r - 5, forceLayout.y));
  }
}

export default new NodeForceLayout();