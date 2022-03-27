import React from 'react'
import DownloadBtn from './DownloadBtn';


interface HandleProps {
    clickedSlide?: number,
    clickedCard?: number[]
}
function HandleBtn({clickedSlide, clickedCard}:HandleProps) {
 let chosenIdx : number[] =[];
  if(clickedSlide){
    chosenIdx = [clickedSlide]
  }else if(clickedCard){
    chosenIdx = [...clickedCard];
  }

  return (
    <div>
      <DownloadBtn chosenIdx={chosenIdx}/> 
    <button type='button'>삭제</button>
</div>
  )
}

export default HandleBtn