import React from 'react'
import {Handle, Position} from 'reactflow';

type CustomNodeProps = {
    data: {value: string,processed: boolean}
  }

const CustomNode = ({data}: CustomNodeProps) => {

    const bgColor = data.processed ? "bg-fuchsia-600" : "bg-nuetral-600";

  return (
    <div className = {`py-1 h-7 w-7 border-white rounded-full relative ${bgColor} text-white border-2 text-center text-xs`}>
        {data.value}
        <Handle  
          style = {{visibility: "hidden" }} 
          type="target" 
          position={Position.Top} 
          id = "t"  
        />
        <Handle  
          style = {{ visibility: "hidden"}} 
          type="source" 
          position={Position.Bottom} 
          id = "s"  
        />
    </div>
  )
}

export default CustomNode