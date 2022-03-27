import React, { useContext } from 'react'
import {ImageContext} from "../../misc/useContext"
import DownloadBtn from './DownloadBtn';


interface HandleProps {
    clickedSlide: number
}
function HandleBtn({clickedSlide}:HandleProps) {
   const chosenIdx:number[] = [clickedSlide]

  return (
    <div>
      <DownloadBtn chosenIdx={chosenIdx}/>
    <button type='button'>삭제</button>
</div>
  )
}

export default HandleBtn