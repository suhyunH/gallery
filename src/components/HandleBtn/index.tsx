import React from 'react'
import DownloadBtn from './DownloadBtn';
import "../../scss/handlebtn.scss"



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
      <button type='button'>삭제</button>
      </>
      

  )
}

export default HandleBtn