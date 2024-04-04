'use client';
import React, { useCallback } from 'react';
import {useState} from 'react';
import SelectAlgo from './SelectAlgo.tsx';
import 'reactflow/dist/style.css';
import Djikstras from './Djikstras.tsx';
import { AlgoType } from '../types.ts';
import BellmanFord from './BellmanFord.tsx';

const MainPage = () => {
  const [activeAlgorithm,setAlgorithm] = useState<AlgoType>('Djikstras');
  
  return (
    <div className = "h-screen p-4 flex flex-col items-center bg-neutral-600 min-w-56">
        <div className = "flex justify-start  w-full mb-2 font-semibold"> 
              <div className = "text-zinc-300">Algorithm Visualizer</div>
        </div>
        <SelectAlgo setAlgorithm={setAlgorithm} activeAlgorithm = {activeAlgorithm}/>
        {activeAlgorithm === "Djikstras" && <Djikstras/>}
        {activeAlgorithm === "Bellman-Ford" && <BellmanFord/>}
    </div>
  )
}

export default MainPage