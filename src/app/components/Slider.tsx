import React, { ChangeEvent } from 'react'


type SliderProps = {
  speed: string,
  setSpeed: (speed: string) => void,
  color: string
}



const Slider = ({speed,setSpeed,color}: SliderProps) => {

  function speedChangeHandler(event: ChangeEvent<HTMLInputElement>){
    const newSpeed = event.currentTarget.value;
    setSpeed(newSpeed);
  }

  return (
    <div className =" flex flex-row items-center mr-2">
        <span className = "mr-1 text-white">Speed:</span>
        <input 
          type = "range" 
          min={500} 
          max ={1000} 
          step = "100" 
          value = {speed}  
          className = {`w-14 sm:w-24 mt-1 ${color}`}
          onChange = {speedChangeHandler}>
        </input>
    </div>
  )
}

export default Slider