import React, { useContext } from 'react'
import { useLocation, useParams} from 'react-router-dom'
import '../scss/imagedetail.scss'
import {ImageContext} from "../misc/useContext"



function ImageDetail() {
  const location = useLocation();
  const url = location.search.substring(1) as string;
  console.log(url);
  const data = useContext(ImageContext).renderings;

  return (
    <div>
        <div className='header'>
            <div>
                <button type='button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                </button>
            </div>
            <div>
                <button className='down-btn' type='button'>다운로드</button>
                <button type='button'>삭제</button>
            </div>
        </div>

        <div>
         <img src={url} alt="" />
        </div>
    </div>
  )
}

export default ImageDetail