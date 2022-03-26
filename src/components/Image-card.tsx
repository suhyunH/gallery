import React from 'react'
import "../scss/imagecard.scss";
import { Link } from 'react-router-dom';
import { Data } from '../misc/model';


function ImageCard({...data}:Data[]) {
    const imageArr = Object.values(data);
    console.log(imageArr[0]);
  return (
  <>
        {imageArr.map((i, idx)=>
            <li key={idx} className='card-item' >
                <div className='card-pic' >
                    <img src={i._id}/>
                <span className='card-view'>일인칭 뷰어</span>
                </div>
                <div className='card-hover-container'>
                    <input id="select" type="checkbox"/>
                <Link to={{pathname:`/image/${idx}`, search:`${idx}`}}>
                    <div className="card-hover">
                        <button className='card-option' type='button'>...</button>
                    </div>
                </Link>
                </div>
            </li>
        )}
        </>

  
    
  )
}

export default ImageCard