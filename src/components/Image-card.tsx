import React from 'react'
import "../scss/imagecard.scss";
import { Link } from 'react-router-dom';
import { Data } from '../misc/model';


function ImageCard({...data}:Data[]) {
    const imageArr = Object.values(data);
    console.log(imageArr[0]);
  return (
  <>
  {/* //, search:`${i._id}` */}
        {imageArr.map((i, idx)=>
        <Link to={{pathname:`/image/${idx}`, search:`${idx}`}}>
            <li key={idx} className='card-item' >
                <div className='card-pic' >
                    <img src={i._id}/>
                <span className='card-view'>일인칭 뷰어</span>
                </div>
                <div className="card-hover">
                    <input id="select" type="checkbox"/>
                    <button className='card-option' type='button'>...</button>
                </div>
            </li>
        </Link>
        )}
        </>

  
    
  )
}

export default ImageCard