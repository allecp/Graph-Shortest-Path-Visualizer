import {Edge,Node, MarkerType} from 'reactflow';


const graphs: {nodes: Node[], edges: Edge[]}[] = [
    {
        nodes:
            [
                {id: '0', type: 'bellmanFordNode', position: {x:0, y: 0}, data : {value: '0', processed:false}},
                {id: '1', type: 'bellmanFordNode', position: {x:-50, y: 50}, data : {value: '?', processed:false}},
                {id: '2', type: 'bellmanFordNode', position: {x:50, y: 50}, data : {value: '?', processed:false}},
                {id: '3', type: 'bellmanFordNode', position: {x:50, y: 120}, data : {value: '?', processed:false}},
                {id: '4', type: 'bellmanFordNode', position: {x:-50, y: 120}, data : {value: '?', processed:false}},

            ]
        ,
        edges:
            [
                {id:"0",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "1", targetHandle: "t", style: {stroke:"white"}, data:{weight:2}},
                {id:"1",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:1}},
                {id:"2",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '1', target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:-1}},
                {id:"3",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '1', target: "4", targetHandle: "t", style: {stroke:"white"}, data:{weight:11}},
                {id:"4",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:-5}},
                {id:"5",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '2', target: "3", targetHandle: "t", style: {stroke:"white"}, data:{weight:2}},
                {id:"6",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '4', target: "3", targetHandle: "t", style: {stroke:"white"}, data:{weight:12}},
                {id:"7",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '1', target: "3", targetHandle: "t", style: {stroke:"white"}, data:{weight:-2}},
            ]
    },
    {
        nodes:
            [
                {id: '0', type: 'bellmanFordNode', position: {x:0, y: 0}, data : {value: '0', processed:false}},
                {id: '1', type: 'bellmanFordNode', position: {x:-50, y: 50}, data : {value: '?', processed:false}},
                {id: '2', type: 'bellmanFordNode', position: {x:50, y: 50}, data : {value: '?', processed:false}},
            ]
        ,
        edges:
            [
                {id:"0",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "1", targetHandle: "t", style: {stroke:"white"}, data:{weight:-1}},
                {id:"1",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '1', target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:-1}},
                {id:"2",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '2', target: "0", targetHandle: "t", style: {stroke:"white"}, data:{weight:-2}},
            ]
    },
    {
        nodes:
            [
                {id: '0', type: 'bellmanFordNode', position: {x:0, y: 0}, data : {value: '0', processed:false}},
                {id: '1', type: 'bellmanFordNode', position: {x:-50, y: 50}, data : {value: '?', processed:false}},
                {id: '2', type: 'bellmanFordNode', position: {x:50, y: 50}, data : {value: '?', processed:false}},
                {id: '3', type: 'bellmanFordNode', position: {x:0, y: 100}, data : {value: '?', processed:false}},
            ]
        ,
        edges:
            [
                {id:"0",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "1", targetHandle: "t", style: {stroke:"white"}, data:{weight:-1}},
                {id:"1",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '1', target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:-1}},
                {id:"2",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:-2}},
                {id:"3",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '1', target: "3", targetHandle: "t", style: {stroke:"white"}, data:{weight:-2}},
                {id:"4",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '3', target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:-2}},
                {id:"5",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '3', target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:-2}},
            ]
    },
    {
        nodes:
            [
                {id: '0', type: 'bellmanFordNode', position: {x:0, y: 0}, data : {value: '0', processed:false}},
                {id: '1', type: 'bellmanFordNode', position: {x:100, y: 0}, data : {value: '?', processed:false}},
                {id: '2', type: 'bellmanFordNode', position: {x:200, y: 0}, data : {value: '?', processed:false}},
                {id: '3', type: 'bellmanFordNode', position: {x:100, y: 100}, data : {value: '?', processed:false}},
                {id: '4', type: 'bellmanFordNode', position: {x:0, y: 100}, data : {value: '?', processed:false}},
                {id: '5', type: 'bellmanFordNode', position: {x:200, y: 100}, data : {value: '?', processed:false}},
            ]
        ,
        edges:
            [
                {id:"0",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "3", targetHandle: "t", style: {stroke:"white"}, data:{weight:1}},
                {id:"1",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '1', target: "3", targetHandle: "t", style: {stroke:"white"}, data:{weight:-2}},
                {id:"2",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '2', target: "3", targetHandle: "t", style: {stroke:"white"}, data:{weight:-2}},
                {id:"3",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "1", targetHandle: "t", style: {stroke:"white"}, data:{weight:10}},
                {id:"4",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '4', target: "0", targetHandle: "t", style: {stroke:"white"}, data:{weight:-2}},
                {id:"5",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '3', target: "4", targetHandle: "t", style: {stroke:"white"}, data:{weight:-2}},
                {id:"6",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '1', target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:-2}},
                {id:"7",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '2', target: "5", targetHandle: "t", style: {stroke:"white"}, data:{weight:-2}},
                {id:"8",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '5', target: "3", targetHandle: "t", style: {stroke:"white"}, data:{weight:-2}},   
            ]
    },
    {
        nodes:
            [
                {id: '0', type: 'bellmanFordNode', position: {x:0, y: 0}, data : {value: '0', processed:false}},
                {id: '1', type: 'bellmanFordNode', position: {x:100, y: 75}, data : {value: '?', processed:false}},
                {id: '2', type: 'bellmanFordNode', position: {x:100, y: -75}, data : {value: '?', processed:false}},
                {id: '3', type: 'bellmanFordNode', position: {x:100, y: 0}, data : {value: '?', processed:false}},
                {id: '4', type: 'bellmanFordNode', position: {x:200, y: -75}, data : {value: '?', processed:false}},
                {id: '5', type: 'bellmanFordNode', position: {x:200, y: 75}, data : {value: '?', processed:false}},
                {id: '6', type: 'bellmanFordNode', position: {x:300, y: 0}, data : {value: '?', processed:false}},
            ]
        ,
        edges:
            [
                {id:"0",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:6}},
                {id:"1",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "3", targetHandle: "t", style: {stroke:"white"}, data:{weight:5}},
                {id:"2",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "1", targetHandle: "t", style: {stroke:"white"}, data:{weight:5}},
                {id:"3",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '3', target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:-2}},
                {id:"4",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '1', target: "3", targetHandle: "t", style: {stroke:"white"}, data:{weight:-2}},
                {id:"5",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '2', target: "4", targetHandle: "t", style: {stroke:"white"}, data:{weight:-1}},
                {id:"6",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '3', target: "4", targetHandle: "t", style: {stroke:"white"}, data:{weight:1}},
                {id:"7",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '1', target: "5", targetHandle: "t", style: {stroke:"white"}, data:{weight:-1}},
                {id:"8",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '5', target: "6", targetHandle: "t", style: {stroke:"white"}, data:{weight:3}},
                {id:"9",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '4', target: "6", targetHandle: "t", style: {stroke:"white"}, data:{weight:3}},
            ]
    },
    {
        nodes:
            [
                {id: '0', type: 'bellmanFordNode', position: {x:0, y: 0}, data : {value: '0', processed:false}},
                {id: '1', type: 'bellmanFordNode', position: {x:200, y: 0}, data : {value: '?', processed:false}},
                {id: '2', type: 'bellmanFordNode', position: {x:100, y: 0}, data : {value: '?', processed:false}},
                {id: '3', type: 'bellmanFordNode', position: {x:300, y: 0}, data : {value: '?', processed:false}},
                {id: '4', type: 'bellmanFordNode', position: {x:150, y: 100}, data : {value: '?', processed:false}},
                {id: '5', type: 'bellmanFordNode', position: {x:150, y: -100}, data : {value: '?', processed:false}},
            ]
        ,
        edges:
            [
                {id:"0",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "5", targetHandle: "t", style: {stroke:"white"}, data:{weight:1}},
                {id:"1",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '5', target: "3", targetHandle: "t", style: {stroke:"white"}, data:{weight:5}},
                {id:"2",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '3', target: "4", targetHandle: "t", style: {stroke:"white"}, data:{weight:3}},
                {id:"3",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '4', target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:8}},
                {id:"4",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '2', target: "1", targetHandle: "t", style: {stroke:"white"}, data:{weight:0}},
                {id:"5",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '1', target: "4", targetHandle: "t", style: {stroke:"white"}, data:{weight:-3}},
                {id:"6",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '2', target: "5", targetHandle: "t", style: {stroke:"white"}, data:{weight:5}},
                {id:"7",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '1', target: "5", targetHandle: "t", style: {stroke:"white"}, data:{weight:11}},
                {id:"8",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '4', target: "0", targetHandle: "t", style: {stroke:"white"}, data:{weight:2}},
                {id:"9",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:6}},
                {id:"10",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '1', target: "3", targetHandle: "t", style: {stroke:"white"}, data:{weight:6}},
            ]
    },
    {
        nodes:
            [
                {id: '0', type: 'bellmanFordNode', position: {x:0, y: 0}, data : {value: '0', processed:false}},
                {id: '1', type: 'bellmanFordNode', position: {x:200, y: 0}, data : {value: '?', processed:false}},
                {id: '2', type: 'bellmanFordNode', position: {x:0, y: -100}, data : {value: '?', processed:false}},
                {id: '3', type: 'bellmanFordNode', position: {x:100, y: 0}, data : {value: '?', processed:false}},
                {id: '4', type: 'bellmanFordNode', position: {x:100, y: -100}, data : {value: '?', processed:false}},
                {id: '5', type: 'bellmanFordNode', position: {x:200, y: -100}, data : {value: '?', processed:false}},  
            ]
        ,
        edges:
            [
                {id:"0",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:5}},
                {id:"1",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '2', target: "4", targetHandle: "t", style: {stroke:"white"}, data:{weight:-10}},
                {id:"2",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '4', target: "5", targetHandle: "t", style: {stroke:"white"}, data:{weight:10}},
                {id:"3",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '5', target: "1", targetHandle: "t", style: {stroke:"white"}, data:{weight:-3}},
                {id:"4",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '3', target: "1", targetHandle: "t", style: {stroke:"white"}, data:{weight:12}},
                {id:"5",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '4', target: "3", targetHandle: "t", style: {stroke:"white"}, data:{weight:8}},
            ]
    },
    {
        nodes:
            [
                {id: '0', type: 'bellmanFordNode', position: {x:50, y: 0}, data : {value: '0', processed:false}},
                {id: '1', type: 'bellmanFordNode', position: {x:100, y: 50}, data : {value: '?', processed:false}},
                {id: '2', type: 'bellmanFordNode', position: {x:-50, y: 50}, data : {value: '?', processed:false}},
                {id: '3', type: 'bellmanFordNode', position: {x:-100, y: 100}, data : {value: '?', processed:false}},
                {id: '4', type: 'bellmanFordNode', position: {x:150, y: 100}, data : {value: '?', processed:false}},
                {id: '5', type: 'bellmanFordNode', position: {x:0, y: 100}, data : {value: '?', processed:false}},
                {id: '6', type: 'bellmanFordNode', position: {x:50, y: 100}, data : {value: '?', processed:false}},
                {id: '7', type: 'bellmanFordNode', position: {x:0, y: 0}, data : {value: '?', processed:false}},
                {id: '8', type: 'bellmanFordNode', position: {x:-50, y: 150}, data : {value: '?', processed:false}},
                {id: '9', type: 'bellmanFordNode', position: {x:0, y: 200}, data : {value: '?', processed:false}},
                {id: '10', type: 'bellmanFordNode', position: {x:50, y: 200}, data : {value: '?', processed:false}},
                {id: '11', type: 'bellmanFordNode', position: {x:100, y: 150}, data : {value: '?', processed:false}},
            ]
        ,
        edges:
            [
                {id:"0",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "1", targetHandle: "t", style: {stroke:"white"}, data:{weight:5}},
                {id:"1",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "6", targetHandle: "t", style: {stroke:"white"}, data:{weight:-1}},
                {id:"2",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '0', target: "7", targetHandle: "t", style: {stroke:"white"}, data:{weight:2}},
                {id:"3",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '7', target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:2}},
                {id:"4",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '4', target: "11", targetHandle: "t", style: {stroke:"white"}, data:{weight:-2}},
                {id:"5",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '5', target: "8", targetHandle: "t", style: {stroke:"white"}, data:{weight:10}},
                {id:"6",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '7', target: "5", targetHandle: "t", style: {stroke:"white"}, data:{weight:1}},
                {id:"7",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '2', target: "5", targetHandle: "t", style: {stroke:"white"}, data:{weight:3}},
                {id:"8",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '2', target: "3", targetHandle: "t", style: {stroke:"white"}, data:{weight:-4}},
                {id:"9",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '6', target: "11", targetHandle: "t", style: {stroke:"white"}, data:{weight:0}},
                {id:"10",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '5', target: "0", targetHandle: "t", style: {stroke:"white"}, data:{weight:12}},
                {id:"11",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '5', target: "6", targetHandle: "t", style: {stroke:"white"}, data:{weight:-4}},
                {id:"12",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '11', target: "10", targetHandle: "t", style: {stroke:"white"}, data:{weight:5}},
                {id:"13",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '6', target: "10", targetHandle: "t", style: {stroke:"white"}, data:{weight:7}},
                {id:"14",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '10', target: "5", targetHandle: "t", style: {stroke:"white"}, data:{weight:9}},
                {id:"15",type: "bellmanFordEdge",  markerEnd: {type: MarkerType.ArrowClosed},sourceHandle: "s", source: '8', target: "9", targetHandle: "t", style: {stroke:"white"}, data:{weight:8}},
                
            ]
    },


    
]

export default graphs;