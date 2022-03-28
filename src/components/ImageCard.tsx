import React, { useContext, useEffect} from 'react'
import "../scss/imagecard.scss";
import { Link } from 'react-router-dom';
import { CardContext, ImageContext } from '../misc/useContext';


function ImageCard() {
    const { state, setState }= useContext(ImageContext);
    const {cards, setCards} = useContext(CardContext);
    
    const onChecked = (e:React.ChangeEvent<HTMLInputElement>)=>{
        let checkedNum= parseInt(e.target.id)
            if(!cards?.includes(checkedNum)){
                setCards(i =>[...(i? i : []), checkedNum]);
            }else if(cards.includes(checkedNum)){
                setCards(cards.filter((i)=>i!==checkedNum));
            }
    }
    useEffect(()=>{
        if(cards?.length===0){
            setCards(null);
        }
    },[cards])
  return (
  <>
        {state.map((_, idx)=>
            <li key={idx} className='card-item' >
                <div className='card-pic' >
                    <img src={state[idx]._id}/>
                </div>
                <div className='card-hover-container'>
                    <Link to={{pathname:`/image/${idx}`, search:`${idx}`}}>
                        <div className="card-hover"></div>
                    </Link>
                    <input className='checkbox' type="checkbox" onChange={onChecked} id={`${idx}`} checked={cards?.includes(parseInt(`${idx}`))}/>
                    <button className='card-option' type='button'>...</button>
                </div>
            </li>
        )}
        </>

  
    
  )
}

export default ImageCard