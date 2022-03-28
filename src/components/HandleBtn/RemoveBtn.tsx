import React, { useContext, useEffect } from 'react'
import { ImageContext } from '../../misc/useContext';

interface RemoveProps{
  chosenIdx : number[];
  // setClickedCard : (v: number[]) => void;  
}

function RemoveBtn({chosenIdx }:RemoveProps) {
  const { state, setState }= useContext(ImageContext);
  
  const onDelete =(id: number[])=>{
    const newState = [...state]
    id.map(i=>newState.splice(i,1));
    setState(newState);
  }
  useEffect(()=>{
    // setClickedCard([]);
  },[state])
  console.log(chosenIdx)
  
  return (
    <>
    <button type='button' onClick={()=>onDelete(chosenIdx)}>삭제</button>
    </>
  )
}

export default RemoveBtn