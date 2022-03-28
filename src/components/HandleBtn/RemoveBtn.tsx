import React, { useContext } from 'react'
import { ImageContext } from '../../misc/useContext';

interface RemoveProps{
  chosenIdx : number[]
}
function RemoveBtn({chosenIdx}:RemoveProps) {
  const { state, setState }= useContext(ImageContext);
  const onDelete =(id: number[])=>{
  
  }
  return (
    <>
    <button type='button' onClick={()=>onDelete(chosenIdx)}>삭제</button>
    </>
  )
}

export default RemoveBtn