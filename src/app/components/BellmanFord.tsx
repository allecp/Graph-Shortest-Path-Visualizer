
import React, { useCallback, useState, useEffect, useRef } from 'react';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode.tsx';
import Toolbar from './Toolbar.tsx'
import {ModeType, NodeInfo,AdjInfo} from '../types.ts'
import CustomEdge from './customEdge.tsx';
import Graphs from '../graphs2.ts';
import toast, { Toaster } from 'react-hot-toast';

import ReactFlow, {
  addEdge,
  FitViewOptions,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  EdgeTypesWrapped,
  useReactFlow,
  ReactFlowProvider
} from 'reactflow';
import next from 'next';

// set node and edge types to the custom nodes/edges
const nodeTypes = { customNode : CustomNode }
const edgeTypes = {
  customEdge: CustomEdge
}

// hides reactflow icon
const proOptions = { hideAttribution: true };

const initialNodes = Graphs[5].nodes;
const initialEdges = Graphs[5].edges;

function initCostArr(graphNum: number){
  return Graphs[graphNum].nodes.map((node) => ({id: node.id, cost: node.data.value === '0' ? 0 : Number.MAX_SAFE_INTEGER,used: false}));
}

const BellManFord = () => {
  
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [costArr,setCostArr] = useState<NodeInfo[]>(initCostArr(5));
  const [graph,setGraph] = useState<number>(5)
  const [currentNode,setCurrentNode] = useState<{id: string, isActive: boolean, update: boolean, iter: number,terminate: boolean}>({id: '0',isActive: false, iter:1,update: false, terminate: false});
  const intervalId = useRef<string | number | undefined | NodeJS.Timeout>(undefined);
  const [run,setRun] = useState(false);
  const [speed,setSpeed] = useState('500')

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  useEffect(() => {
    if (run){
      iteration();
    }
    return () => clearInterval(intervalId.current);
  },[currentNode,run])



  // fires after going over all the edges from the previous node
  // sets state to highlight current node and switches isActive to false to prepare to process the adj edges of current node
  // increases the iteration num
  function handleNode(){

    const newNodes = nodes.map((node) => node.id === currentNode.id ? {...node,data: {...node.data,processed: true}} : {...node});
    
    intervalId.current = setInterval(() => {
      setNodes(newNodes);
      setCurrentNode({...currentNode,isActive: true});
    },1000 - parseInt(speed));
  }

  function handleEdges(){
    let nextEdgeId = '-1';
    const currentNodeId = currentNode.id;

    for (let i = 0; i < edges.length; i++){
        if (currentNodeId === edges[i].source && edges[i].style?.stroke === "white"){
          nextEdgeId = edges[i].id;
          break;
        }
    }

    // all adjacent edges of currentnode are highlighted
    // make edges white and get ready to proccess the next node
    if (nextEdgeId === '-1'){
      const newEdges = edges.map((edge) => ({...edge,style: {stroke: "white"}}));
      let nextNodeId = (parseInt(currentNode.id) + 1).toString();
      let nextIteration = currentNode.iter;
      let terminate = false, update = currentNode.update;

      // if the next node id === nodes.length, it means we have completed the current iteration of bellmanford
      // reset the next node to be node zero and increase the iteration number
      // bellmanford needs V iterations to complete with an extra iteration to check for negative cycles 
      if (parseInt(nextNodeId) === nodes.length){
        nextNodeId = '0';
        nextIteration += 1;
        terminate = !currentNode.update;
        update = false;
      }

      if (terminate)
        console.log("terminated in edges");

      intervalId.current = setInterval(() => {
        setEdges(newEdges);
        setNodes(nodes.map((node) => ({...node,data: {...node.data,processed:false}})));
        setCurrentNode({iter: nextIteration,isActive: false,id: nextNodeId,terminate: terminate, update: update});
      },1000 - parseInt(speed))
      
      return;
    }

    // create new edge array with the next edge to be highlighted
    const newEdges = edges.map((edge) => edge.id !== nextEdgeId ? {...edge} : {...edge,style: {stroke: "#c026d3"}});
    let update = false;
    const sourceCost = costArr[parseInt(currentNode.id)].cost, targetNode = edges[parseInt(nextEdgeId)].target;
    const targetCost = costArr[parseInt(targetNode)].cost;
    const totalCost = sourceCost === Number.MAX_SAFE_INTEGER ? sourceCost : sourceCost + edges[parseInt(nextEdgeId)].data.weight;
    
    const newCostArr = costArr.map((element) => {
      if (element.id === targetNode && totalCost < targetCost){
        update = true;
        return {...element,cost: totalCost};
      }
      else{
        return {...element};
      }
    });

    

    const newNodes = nodes.map((node,index) => {
      const newValue = newCostArr[index].cost === Number.MAX_SAFE_INTEGER ? "?" : newCostArr[index].cost.toString();
      return {...node,data: {...node.data, value: newValue}};
    });

    if (currentNode.update || update){
      update = true;
    }


    intervalId.current = setInterval(() => {
      setNodes(newNodes);
      setCostArr(newCostArr);
      setEdges(newEdges);
      setCurrentNode({...currentNode,update:update});
      //console.log(update);
    },1000 - parseInt(speed))
  }

  function dfs(node: number, visited: boolean[], cost: number, cycleEdges: Edge[]): number{

    // negative cycle detected 
    if (visited[node] && cost < 0){
      return node;
    }

    // positive cycle detected
    if (visited[node])
      return -1;
   
    visited[node] = true;

    const adjEdges = edges.filter((edge) => edge.source === node.toString());

    for (let i = 0; i < adjEdges.length; i++){
      const target = parseInt(adjEdges[i].target);
      cycleEdges.push(adjEdges[i]);
      const totalCost = cost + adjEdges[i].data?.weight;
      const res = dfs(target,visited,totalCost,cycleEdges);

      if (res > -1){
        return res;
      }

      cycleEdges.pop();
    }
    
    visited[node] = false;

    return -1;
  }

  // perform dfs to check for negative cycles
  function checkNegativeCycle(): boolean{
    
    let visited: boolean[] = new Array(nodes.length);
    let cycleEdges: Edge[] = [];
    let node = 0, cost = 0;
    const startNode = dfs(node,visited,cost,cycleEdges);
      
    if (startNode > -1){
      const startLoopEdge = cycleEdges.slice(cycleEdges.findIndex((edge) => edge.source === startNode.toString()),cycleEdges.length);
      let edgeSet: Set<string> = new Set();
      startLoopEdge.forEach((edge) => edgeSet.add(edge.id));

      setEdges(edges.map((edge) => edgeSet.has(edge.id) ? {...edge,style:{stroke: 'rgb(192 38 211)'}} : {...edge}));
      return true;
    }
    return false
  }


  // highlights all nodes purple if shortest path to all nodes can be calculated 
  function finishGraph(){
    setNodes(nodes.map((node) => ({...node,data: {...node.data,processed: true}})));
  }

  function checkConnected(): boolean{
    
    let inDegree: Array<number> = new Array(nodes.length);
    inDegree.fill(0);

    edges.forEach((edge) => {
      inDegree[parseInt(edge.target)]++;
    });

    for (let i = 0; i < inDegree.length; i++){
      if (inDegree[i] === 0 && i != 0){
        return false;
      }
    }

    return true;
  }

  
  function iteration(){

    if (currentNode.iter === 1  && currentNode.id === '0' && checkNegativeCycle()){
      toast("Graph contains negative cycle. Unable to find shortest path to all nodes.");
      //toast("Graph is not connected. Unable to find shortest path to all nodes");
    }
    else if (currentNode.iter === 1 && currentNode.id === '0' &&  !checkConnected()){
      //toast("Graph contains negative cycle. Unable to find shortest path to all nodes");
      toast("All nodes cannot be reached from start. Unable to find shortest path");
    }
    // the algorithm also stops if the previous iteration did not update any nodes
    else if (currentNode.id === '0' && currentNode.terminate || currentNode.iter === nodes.length){
      finishGraph();
      //setCurrentNode({...currentNode,terminate:true});
    }
    else if (!currentNode.isActive){
      handleNode()
    }
    else{
      handleEdges()
    }
}

  // kick off the algorithm after the user clicks the start button
  // trigger the useEffect function by calling the setActiveEdgeOrNode with the initial state
  // set runAlgo.current = true 
  function startHandler():void{
    setRun(true);
    setCurrentNode({...currentNode});
  }  

  // stop animation
  // reset nodes and edges to desired nodes/edges
  function changeGraphHandler(): void{
    setRun(false);
    const nextGraph = (graph + 1) % Graphs.length;
    setGraph(nextGraph);
    setNodes(Graphs[nextGraph].nodes.map((node) => ({...node})));
    setEdges(Graphs[nextGraph].edges.map((edge) => ({...edge})));
    setCostArr(initCostArr(nextGraph));
    setCurrentNode({id: '0', isActive: false,iter: 1,terminate: false,update:false})

  }

  function resetHandler(): void{
    setRun(false);
    setNodes(Graphs[graph].nodes.map((node) => ({...node})));
    setEdges(Graphs[graph].edges.map((edge) => ({...edge})));
    setCostArr(initCostArr(graph));
    setCurrentNode({id: '0', isActive: false, iter: 1, terminate: false, update: false})
  }

  function pauseHandler():void{
    setRun(false);
  }

  return (
      <div className = "w-screen h-5/6 flex-col items-center">
        <Toaster/>
        <ReactFlowProvider>
          <ReactFlow
            nodes = {nodes}
            edges = {edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            proOptions = {proOptions}
            //onConnect={onConnect}
            nodeTypes = {nodeTypes}
            edgeTypes={edgeTypes}
            onInit={(instance) => instance.fitView()}
          />
        <Toolbar 
          startHandler = {startHandler} 
          changeHandler = {changeGraphHandler} 
          resetHandler = {resetHandler}
          pauseHandler = {pauseHandler}
          run = {run}
          speed = {speed}
          setSpeed = {setSpeed}
        />
        </ReactFlowProvider>
    </div>
  )
}

export default BellManFord