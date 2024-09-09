
import React, { useCallback, useState, useEffect, useRef } from 'react';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode.tsx';
import Toolbar from './Toolbar.tsx'
import {ModeType, NodeInfo,AdjInfo} from '../types.ts'
import CustomEdge from './CustomEdge.tsx';
import Graphs from '../graphs.ts'

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
const nodeTypes = { customNode: CustomNode}
const edgeTypes = {
  customEdge: CustomEdge
}

// hides reactflow icon
const proOptions = { hideAttribution: true };

const initialNodes = Graphs[0].nodes;
const initialEdges = Graphs[0].edges;

// initialzes cost array. sets distance from start nodes to "infinity" except start node
function initCostArr(graphNum: number){
  return Graphs[graphNum].nodes.map((node) => ({id: node.id, cost: node.data.value === '0' ? 0 : Number.MAX_SAFE_INTEGER,used: false}));
}

const Djikstras = () => {

  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [costArr,setCostArr] = useState<NodeInfo[]>(initCostArr(0));
  const [graph,setGraph] = useState<number>(0)
  const [currentNode,setCurrentNode] = useState<{id: string, isActive: boolean}>({id: '0',isActive: false});
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

  // useEffect callback runs when run or currentNode changes
  // if the user restarts the algorithm,changes graph, or pauses: run === false, iteration does not run and the djikstra algorithm stops
  useEffect(() => {
    if (run){
      iteration();
    }
    // clears the interval when setCurrentNode() triggers state change
    return () => clearInterval(intervalId.current);
  },[currentNode,run])



  // finds the next closest node from start and makes state changes to highlight the current node 
  // currentNode.isActive is set to true so that the edges from the current node are processed next
  function handleNode(){
    let min = Number.MAX_SAFE_INTEGER, minId = '-1';

    costArr.forEach((nodeInfo) => { 
      if (nodeInfo.cost < min && !nodeInfo.used){
        min = nodeInfo.cost;
        minId = nodeInfo.id;
      }
    });

    // marks the node that is going to be used
    let newCostArr = costArr.map((nodeInfo) => nodeInfo.id !== minId ? {...nodeInfo} : {...nodeInfo,used:true})
    let newNodes = nodes.map((node) => node.id !== minId ? {...node} : {...node,data: {...node.data, processed:true}});
    let newEdges = edges.map((edge) => ({...edge,style:{stroke: 'white'}}));

    intervalId.current = setInterval(() => {
      setNodes(newNodes);
      setCostArr(newCostArr);
      setEdges(newEdges);
      setCurrentNode({isActive: true, id: minId});
    },1000 - parseInt(speed))
  }

  // highlights and relaxes edges coming from the current node 
  function handleEdges(){
    let nextEdgeId = '-1';
    const currentNodeId = currentNode.id;

    // finds the next outgoing edge coming from the current highlighted node
    for (let i = 0; i < edges.length; i++){
      if (currentNodeId === edges[i].source && edges[i].style?.stroke === "white"){
        nextEdgeId = edges[i].id;
        break;
      }
    }

      // all adjacent edges are highlighted, therefore switch state to isActive to switch back to processing a new node
      if (nextEdgeId === '-1'){
        intervalId.current = setInterval(()=>{
          setCurrentNode({id: currentNode.id,isActive:false})
        },1000 - parseInt(speed));

        return;
      };


      const nextEdgeWeight = edges[parseInt(nextEdgeId)].data.weight;
      let newEdgeArr = edges.map((edge) => nextEdgeId === edge.id ? {...edge,style: {stroke: "#c026d3"}} : {...edge});

      let targetId = edges[parseInt(nextEdgeId)].target, sourceId = currentNode.id;

      const newCostArr = costArr.map((element) => {

        const totalCost = costArr[parseInt(sourceId)].cost + nextEdgeWeight;
        if (element.id === targetId && totalCost < costArr[parseInt(targetId)].cost){
            return {...element,cost:totalCost}
        }
        return {...element};
      });

      const newNodes = nodes.map((node,index) => {
        const newValue = newCostArr[index].cost === Number.MAX_SAFE_INTEGER ? "?" : newCostArr[index].cost.toString();
        return {...node,data: {...node.data, value: newValue}};
      });

      intervalId.current = setInterval(() => {
        setNodes(newNodes);
        setCostArr(newCostArr);
        setEdges(newEdgeArr);
        setCurrentNode({...currentNode});
      },1000 - parseInt(speed))
  }

  // dictates the state of each iteration of djikstra algorithm
  // controls the nodes that change colors and edges as the algorithm executes based off state
  function iteration(){

    let processedNodes = 0

    nodes.forEach((node) => {
      if (node.data.processed){
        processedNodes++;
      }
    });

    // if all the nodes have been processed, the algorithm has finished.
    if (processedNodes === nodes.length){
      return;
    }
    // currentNode {nodeId : string, isActive : boolean}
    // next node is ready to be selected
    else if (!currentNode.isActive){
      handleNode()
    }
    // currentnode is active: higlight its outgoing edges
    else{
      handleEdges()
    }
}

  // kick off the algorithm after the user clicks the start button
  // trigger the useEffect function by calling the setActiveEdgeOrNode with the initial state
  // set runAlgo.current = true 
  function startHandler(){
    setRun(true);
    setCurrentNode({...currentNode});
  }  

  // stop animation
  // reset nodes and edges to desired nodes/edges
  function changeGraphHandler(){
    setRun(false);
    const nextGraph = (graph + 1) % Graphs.length;
    setGraph(nextGraph);
    setNodes(Graphs[nextGraph].nodes.map((node) => ({...node})));
    setEdges(Graphs[nextGraph].edges.map((edge) => ({...edge})));
    setCostArr(initCostArr(nextGraph));
    setCurrentNode({id: '0', isActive: false})

  }

  // resets the graph to its original state
  function resetHandler(){
    setRun(false);
    setNodes(Graphs[graph].nodes.map((node) => ({...node})));
    setEdges(Graphs[graph].edges.map((edge) => ({...edge})));
    setCostArr(initCostArr(graph));
    setCurrentNode({id: '0', isActive: false})
  }

  // pauses the algorithm after the user clicks pause button
  function pauseHandler(){
    setRun(false);
  }

  return (
      <div className = "w-screen h-5/6 flex-col items-center">
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


export default Djikstras;