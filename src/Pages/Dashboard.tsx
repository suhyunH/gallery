import React, { useContext } from 'react'
import ImageCard from '../components/Image-card'
import "../scss/dashboard.scss"
import {ImageContext} from "../misc/useContext"


function Dashboard() {
  const data = useContext(ImageContext).renderings;
  return (
    <div>
        {/* nav */}
        <div className='close-btn-container'>
            <button type='button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                
            </button>
        </div>
        
        <div className='content-container'>
            <div className='gallary-header'>
                <span className='image-total'>{data.length}개의 렌더샷</span>
                <div>갤러리</div>
            </div>
            <ul className='imagecard-container'>
              <ImageCard {...data}/>
            </ul>

        </div>
    </div>
  )
}

export default Dashboard