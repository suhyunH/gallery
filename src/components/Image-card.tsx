import React, { useRef, useState } from 'react'
import "../scss/imagecard.scss";
import { Link } from 'react-router-dom';
import { Data } from '../misc/model';

function ImageCard({...data}:Data[]) {
    const imageArr = Object.values(data);
    const [checked, setChecked] =useState<number[]>([])
    const inputRef = useRef<HTMLInputElement>(null)
    const onChecked = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setChecked(i=>[...i, parseInt(e.target.id)]);
    }
  
  return (
  <>
        {imageArr.map((i, idx)=>
            <li key={idx} className='card-item' >
                <div className='card-pic' >
                    <img src={i._id}/>
                    <span className='card-view'>일인칭 뷰어</span>
                </div>
                <div className='card-hover-container'>
                    <Link to={{pathname:`/image/${idx}`, search:`${idx}`}}>
                        <div className="card-hover"></div>
                    </Link>
                    <input className='checkbox' type="checkbox" onChange={onChecked} id={`${idx}`}/>
                    <button className='card-option' type='button'>...</button>
                </div>
            </li>
        )}
        </>

  
    
  )
}

export default ImageCard