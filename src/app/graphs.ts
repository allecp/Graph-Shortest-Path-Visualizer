
import {Edge,Node, MarkerType} from 'reactflow';



const graphs: {nodes: Node[], edges: Edge[]}[] = [
    {
        nodes:
            [
                {id: '0', type: 'customNode', position: {x:0, y: 0}, data : {value: '0', processed:false}},
                {id: '1', type: 'customNode', position: {x:-50, y: 50}, data : {value: '?', processed:false}},
                {id: '2', type: 'customNode', position: {x:50, y: 50}, data : {value: '?',processed:false}},
                {id: '3', type: 'customNode', position: {x:50, y: 100}, data : {value: '?', processed:false}},
                {id: '4', type: 'customNode', position: {x:-50, y: 100}, data : {value: '?', processed:false}}
            ]
        ,
        edges:
            [
                {id:"0",type: "customEdge", sourceHandle: "s", markerEnd: {type: MarkerType.ArrowClosed}, source: '0', target: "1", targetHandle: "t", style: {stroke:"white"}, data:{weight:2}},
                {id:"1",type: "customEdge", sourceHandle: "s", markerEnd: {type: MarkerType.ArrowClosed},  source: '0', target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:10}},
                {id:"2",type: "customEdge", sourceHandle: "s", markerEnd: {type: MarkerType.ArrowClosed},  source: '1',target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:20}},
                {id:"3",type: "customEdge", sourceHandle: "s", markerEnd: {type: MarkerType.ArrowClosed}, source: '2',target: "3", targetHandle: "t", style: {stroke:"white"}, data:{weight:1}},
                {id:"4",type: "customEdge", sourceHandle: "s", markerEnd: {type: MarkerType.ArrowClosed}, source: '1',target: "4", targetHandle: "t", style: {stroke:"white"}, data:{weight:4}},
                {id:"5",type: "customEdge", sourceHandle: "s", markerEnd: {type: MarkerType.ArrowClosed}, source: '4',target: "3", targetHandle: "t", style: {stroke:"white"}, data:{weight:5}},
                {id:"6",type: "customEdge", sourceHandle: "s", markerEnd: {type: MarkerType.ArrowClosed}, source: '4',target: "2", targetHandle: "t", style: {stroke:"white"}, data:{weight:6}}
            ]
    },
    {
        nodes:
            [
                {id: '0', type: 'customNode', position: {x:-50, y: 50}, data : {value: '0', processed:false}},
                {id: '1', type: 'customNode', position: {x:0, y: 0}, data : {value: '?', processed:false}},
                {id: '2', type: 'customNode', position: {x:0, y: 100}, data : {value: '?', processed:false}},
                {id: '3', type: 'customNode', position: {x:-100, y: 100}, data : {value: '?', processed:false}},
                {id: '4', type: 'customNode', position: {x:-100, y: 0}, data : {value: '?', processed:false}},
                {id: '5', type: 'customNode', position: {x:50, y: 50}, data : {value: '?', processed:false}},
            ],
        edges:
            [
                {id:"0",type: "customEdge", sourceHandle: "s", source: '0', target: "1", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed},  style: {stroke:"white"}, data:{weight:2}},
                {id:"1",type: "customEdge", sourceHandle: "s", source: '0', target: "4", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed},  style: {stroke:"white"}, data:{weight:2}},
                {id:"2",type: "customEdge", sourceHandle: "s", source: '0', target: "3", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed},  style: {stroke:"white"}, data:{weight:2}},
                {id:"3",type: "customEdge", sourceHandle: "s", source: '0', target: "2", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed},  style: {stroke:"white"}, data:{weight:2}},
                {id:"4",type: "customEdge", sourceHandle: "s", source: '0', target: "5", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed},  style: {stroke:"white"}, data:{weight:2}},
                {id:"5",type: "customEdge", sourceHandle: "s", source: '4', target: "3", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed},  style: {stroke:"white"}, data:{weight:6}},
                {id:"6",type: "customEdge", sourceHandle: "s", source: '4', target: "1", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed},  style: {stroke:"white"}, data:{weight:10}},
                {id:"7",type: "customEdge", sourceHandle: "s", source: '3', target: "2", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed},  style: {stroke:"white"}, data:{weight:5}},
                {id:"8",type: "customEdge", sourceHandle: "s", source: '2', target: "1", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed},  style: {stroke:"white"}, data:{weight:2}},
                {id:"9",type: "customEdge", sourceHandle: "s", source: '1', target: "5", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed},  style: {stroke:"white"}, data:{weight:8}},
                {id:"10",type: "customEdge", sourceHandle: "s", source: '2', target: "5", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed},  style: {stroke:"white"}, data:{weight:11}},
            ]
    },
    {
        nodes:
            [
                {id: '0', type: 'customNode', position: {x:50, y: 50}, data : {value: '0', processed:false}},
                {id: '1', type: 'customNode', position: {x:-50, y: -50}, data : {value: '?', processed:false}},
                {id: '2', type: 'customNode', position: {x:-100, y: 0}, data : {value: '?', processed:false}},
                {id: '3', type: 'customNode', position: {x:50, y: -50}, data : {value: '?', processed:false}},
                {id: '4', type: 'customNode', position: {x:100, y: 0}, data : {value: '?', processed:false}},
                {id: '5', type: 'customNode', position: {x:150, y: -50}, data : {value: '?', processed:false}},
                {id: '6', type: 'customNode', position: {x:-50, y: 50}, data : {value: '?', processed:false}},
                {id: '7', type: 'customNode', position: {x:0, y: 0}, data : {value: '?', processed:false}},
                {id: '8', type: 'customNode', position: {x:150, y: 50}, data : {value: '?', processed:false}},
                {id: '9', type: 'customNode', position: {x:0, y: 100}, data : {value: '?', processed:false}},
                {id: '10', type: 'customNode', position: {x:100, y: 100}, data : {value: '?', processed:false}},
                {id: '11', type: 'customNode', position: {x:-50, y: 150}, data : {value: '?', processed:false}},
                {id: '12', type: 'customNode', position: {x:50, y: 150}, data : {value: '?', processed:false}},
                {id: '13', type: 'customNode', position: {x:150, y: 150}, data : {value: '?', processed:false}},
            ],
        edges:
            [
                {id:"0",type: "customEdge", sourceHandle: "s", source: '0', target: "7", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:10}},
                {id:"1",type: "customEdge", sourceHandle: "s", source: '7', target: "1", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:40}},
                {id:"2",type: "customEdge", sourceHandle: "s", source: '2', target: "1", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:2}},
                {id:"3",type: "customEdge", sourceHandle: "s", source: '7', target: "2", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:7}},
                {id:"4",type: "customEdge", sourceHandle: "s", source: '1', target: "3", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:10}},
                {id:"5",type: "customEdge", sourceHandle: "s", source: '7', target: "3", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:10}},
                {id:"6",type: "customEdge", sourceHandle: "s", source: '7', target: "4", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:2}},
                {id:"7",type: "customEdge", sourceHandle: "s", source: '7', target: "6", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:15}},
                {id:"8",type: "customEdge", sourceHandle: "s", source: '4', target: "3", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:2}},
                {id:"9",type: "customEdge", sourceHandle: "s", source: '4', target: "5", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:5}},
                {id:"10",type: "customEdge", sourceHandle: "s", source: '4', target: "8", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:10}},
                {id:"11",type: "customEdge", sourceHandle: "s", source: '3', target: "5", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:5}},
                {id:"12",type: "customEdge", sourceHandle: "s", source: '0', target: "4", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:15}},
                {id:"13",type: "customEdge", sourceHandle: "s", source: '0', target: "8", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:20}},
                {id:"14",type: "customEdge", sourceHandle: "s", source: '0', target: "6", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:35}},
                {id:"15",type: "customEdge", sourceHandle: "s", source: '0', target: "9", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:30}},
                {id:"16",type: "customEdge", sourceHandle: "s", source: '0', target: "10", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:25}},
                {id:"17",type: "customEdge", sourceHandle: "s", source: '9', target: "11", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:15}},
                {id:"18",type: "customEdge", sourceHandle: "s", source: '6', target: "9", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:1}},
                {id:"19",type: "customEdge", sourceHandle: "s", source: '9', target: "12", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:30}},
                {id:"20",type: "customEdge", sourceHandle: "s", source: '10', target: "12", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:3}},
                {id:"21",type: "customEdge", sourceHandle: "s", source: '10', target: "13", markerEnd: {type: MarkerType.ArrowClosed}, targetHandle: "t", style: {stroke:"white"}, data:{weight:5}},
                {id:"22",type: "customEdge", sourceHandle: "s", source: '11', target: "12", markerEnd: {type: MarkerType.ArrowClosed},  targetHandle: "t", style: {stroke:"white"}, data:{weight:2}},
                {id:"23",type: "customEdge", sourceHandle: "s", source: '12', target: "13", markerEnd: {type: MarkerType.ArrowClosed}, targetHandle: "t", style: {stroke:"white"}, data:{weight:1}},
            ]
    },
    {
        nodes:
        [
            {id: '0', type: 'customNode', position: {x:50, y: 0}, data : {value: '0', processed:false}},
            {id: '1', type: 'customNode', position: {x:200, y: 100}, data : {value: '?', processed:false}},
            {id: '2', type: 'customNode', position: {x:50, y: 100}, data : {value: '?', processed:false}},
            {id: '3', type: 'customNode', position: {x:200, y: 0}, data : {value: '?', processed:false}},
            {id: '4', type: 'customNode', position: {x:50, y: -100}, data : {value: '?', processed:false}},
            {id: '5', type: 'customNode', position: {x:200, y: -100}, data : {value: '?', processed:false}},

        ],
    edges:
        [
            {id:"0",type: "customEdge", sourceHandle: "s", source: '0', target: "3", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed},  style: {stroke:"white"}, data:{weight:5}},
            {id:"1",type: "customEdge", sourceHandle: "s", source: '0', target: "4", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed}, style: {stroke:"white"}, data:{weight:1}},
            {id:"2",type: "customEdge", sourceHandle: "s", source: '0', target: "7", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed}, style: {stroke:"white"}, data:{weight:6}},
            {id:"3",type: "customEdge", sourceHandle: "s", source: '5', target: "3", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed}, style: {stroke:"white"}, data:{weight:7}},
            {id:"4",type: "customEdge", sourceHandle: "s", source: '4', target: "5", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed}, style: {stroke:"white"}, data:{weight:12}},
            {id:"5",type: "customEdge", sourceHandle: "s", source: '0', target: "2", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed}, style: {stroke:"white"}, data:{weight:3}},
            {id:"6",type: "customEdge", sourceHandle: "s", source: '2', target: "1", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed}, style: {stroke:"white"}, data:{weight:2}},
            {id:"7",type: "customEdge", sourceHandle: "s", source: '1', target: "3", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed}, style: {stroke:"white"}, data:{weight:3}},
            {id:"8",type: "customEdge", sourceHandle: "s", source: '4', target: "3", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed}, style: {stroke:"white"}, data:{weight:4}},
            {id:"9",type: "customEdge", sourceHandle: "s", source: '3', target: "2", targetHandle: "t", markerEnd: {type: MarkerType.ArrowClosed}, style: {stroke:"white"}, data:{weight:6}},
        ]
    }
    

,

]




export default graphs;