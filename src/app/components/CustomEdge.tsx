import React from 'react'
import { useCallback } from 'react';
import { BaseEdge, getStraightPath, EdgeLabelRenderer, useStore } from 'reactflow';
import { getEdgeParams } from '../utils';

type CustomEdgeProps = {
    source: string,
    target: string,
    markerEnd?: string,
    id: string,
    style?: React.CSSProperties,
    data?: {weight: number}
}

const CustomEdge = ({source,target,id,style,data,markerEnd}: CustomEdgeProps) => {
  
  const sourceNode = useStore(useCallback((store: any) => store.nodeInternals.get(source), [source]));
  const targetNode = useStore(useCallback((store: any) => store.nodeInternals.get(target), [target]));

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty} = getEdgeParams(sourceNode, targetNode);

  const [edgePath,labelX,labelY] = getStraightPath({
    sourceX: sx,
    sourceY: sy,
    targetX: tx,
    targetY: ty,
  })
    
    return (
    <>
        <BaseEdge 
            id={id} 
            path={edgePath} 
            style ={style} 
            markerEnd={markerEnd}
        />
        <EdgeLabelRenderer>
          <div 
            style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: 'all',
          }}>
            <div className = "font-semibold text-xs bg-neutral-600 rounded-full">{data?.weight}</div>
          </div>
        </EdgeLabelRenderer>
    </>
  )
}

export default CustomEdge