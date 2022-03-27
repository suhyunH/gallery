import React, { useEffect, useState } from 'react'
import "../scss/imagecard.scss";
import { Link } from 'react-router-dom';
import { Data } from '../misc/model';
interface CardProps{
    data: Data[],
    setClickedCard: (v: number[]) => void
    clickedCard:number[]
}

function ImageCard({data, setClickedCard, clickedCard }:CardProps) {
    const imageArr = Object.values(data);
    const [checked, setChecked] =useState<number[]>([])
    
    const onChecked = (e:React.ChangeEvent<HTMLInputElement>)=>{
        let checkedNum= parseInt(e.target.id)
        if(!checked.includes(checkedNum)){
            setChecked(i=> [...i, checkedNum]);
        }else if(checked.includes(checkedNum)){
            setChecked(checked.filter((i)=>i!==checkedNum));
        }
    }
    useEffect(()=>{
        setClickedCard([...checked]);
    },[checked])
    useEffect(()=>{
        if(clickedCard.length ===0 && checked.length > 0){
            setChecked([])
        }
    },[clickedCard])

  console.log(checked);
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
                    <input className='checkbox' type="checkbox" onChange={onChecked} id={`${idx}`} checked={clickedCard.includes(parseInt(`${idx}`))}/>
                    <button className='card-option' type='button'>...</button>
                </div>
            </li>
        )}
        </>

  
    
  )
}

export default ImageCard