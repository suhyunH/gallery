import React, { useEffect, useState } from 'react'
import DownloadBtn from './DownloadBtn';
import "../../scss/handlebtn.scss"
import RemoveBtn from './RemoveBtn';

interface HandleProps {
    clickedSlide?: number,
    clickedCard?: number[]
    isDashboard?:boolean
    // setClickedCard?: (v: number[]) => void
}

function HandleBtn({clickedSlide, clickedCard, isDashboard}:HandleProps) {
  const [chosenIdx, setChosenIdx]= useState<number[]>([])
  useEffect(()=>{
    if(clickedSlide){
      setChosenIdx([clickedSlide])
    }else if(clickedCard){
      setChosenIdx([...clickedCard]);
    }
  },[setChosenIdx])

  return (
      <>
      <DownloadBtn chosenIdx={chosenIdx} /> 
      <RemoveBtn chosenIdx={chosenIdx} />
      </>
      

  )
}

export default HandleBtn