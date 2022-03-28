import { Delete } from '@material-ui/icons';
import React, { useContext } from 'react'
import { CardContext, ImageContext } from '../../misc/useContext';

interface RemoveProps{
  chosenIdx : number[];
}

function RemoveBtn({chosenIdx }:RemoveProps) {
  const { state, setState }= useContext(ImageContext);
  const {cards, setCards} = useContext(CardContext);
  const onDelete =(id: number[])=>{
    const newState = [...state]
    id.map(i=>newState.splice(i,1));
    setState(newState);
    setCards(null)
  }
  
  
  return (
    <>
    <button type='button' onClick={()=>onDelete(chosenIdx)}><Delete /></button>
    </>
  )
}

export default RemoveBtn