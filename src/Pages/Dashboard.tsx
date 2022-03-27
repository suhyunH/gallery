import React, { useContext, useState } from 'react'
import ImageCard from '../components/ImageCard'
import "../scss/dashboard.scss"
import {ImageContext} from "../misc/useContext"
import HandleBtn from '../components/HandleBtn';


function Dashboard() {
  const data = useContext(ImageContext).renderings;
  const arr = Array(data.length).fill(undefined).map((_,idx)=>idx);
  const [clickedCard, setClickedCard] = useState<number[]>([])

  const selectAll =(e:React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.checked){
      setClickedCard(arr);
    }else{
      setClickedCard([]);
    }
  }
  const selectCancle=()=>{
    if(clickedCard.length ===0){
      return 
    }
    setClickedCard([]);
  }
  console.log(clickedCard);


 
  return (
    <div>
        <div className='close-btn-container'>
            <button type='button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>        
            </button>
        </div>
        
        <div className='content-container'>
          <div className='gallary-header'>
            {clickedCard.length>0?
                  <>
                  <div className='select-nav-left'>
                    <span className='image-total'>{clickedCard.length}개의 렌더 이미지 선택됨</span>
                    <div className='image-select-all'>
                      <input id="selectAll" type="checkbox" onChange={selectAll} checked={clickedCard.length===data.length}/>
                      <label htmlFor='selectAll'>모두 선택</label>
                    </div>
                  </div>
                  </>
           :
                    <span className='image-total'>{data.length}개의 렌더샷</span>
            }
                    <h3>갤러리</h3>
              {clickedCard.length >0?
                (<>
              <div className='handlebtn-container'>
                    <HandleBtn clickedCard={clickedCard} isDashboard/>
                    <button type='button' onClick={selectCancle}>선택 취소</button>
                </div>
                
                </>
                )
                : null}
            </div>
            <ul className='imagecard-container'>
              <ImageCard data={data} clickedCard={clickedCard} setClickedCard={(v: number[]) => { setClickedCard(v)}}/>
            </ul>

        </div>
    </div>
  )
}

export default Dashboard