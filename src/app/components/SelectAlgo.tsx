import React, { ChangeEvent } from 'react'
import {MouseEvent} from 'react';
import Option from './Option.tsx'
import {useState} from 'react';
import { AlgoType } from '../types.ts';

type SelectAlgoProps = {
  setAlgorithm: (algo: AlgoType) => void;
  activeAlgorithm: AlgoType
}


const SelectAlgo = ({setAlgorithm, activeAlgorithm  }: SelectAlgoProps) => {

  function selectOptionHandler(e: ChangeEvent){
    const target = e.currentTarget as HTMLSelectElement;
    setAlgorithm(target.value as AlgoType);
  }

  return (
    <select value = {activeAlgorithm} 
      className = "bg-neutral-600  text-sm text-zinc-300 rounded-none w-44 cursor-pointer padding"
      onChange = {selectOptionHandler}
    >
        <Option value = "Djikstras"/>
        <Option value = "Bellman-Ford"/>
    </select>

  )
}

export default SelectAlgo;