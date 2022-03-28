import React from 'react'
import DownloadBtn from './DownloadBtn';
import "../../scss/handlebtn.scss"
import RemoveBtn from './RemoveBtn';

interface HandleProps {
    clickedSlide?: number,
    clickedCard?: number[]
    isDashboard?:boolean
}

function HandleBtn({clickedSlide, clickedCard, isDashboard}:HandleProps) {
  
 let chosenIdx : number[] =[];
  if(clickedSlide){
    chosenIdx = [clickedSlide]
  }else if(clickedCard){
    chosenIdx = [...clickedCard];
  }

  return (
      <>
      <DownloadBtn chosenIdx={chosenIdx}/> 
      <RemoveBtn chosenIdx={chosenIdx}/>
      </>
      

  )
}

export default HandleBtn