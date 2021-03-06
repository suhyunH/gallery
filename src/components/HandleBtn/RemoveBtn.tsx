import { Delete, DeleteForever, DeleteSweep, FileCopy } from '@material-ui/icons';
import React, { useContext, useState } from 'react'
import { CardContext, ImageContext } from '../../misc/useContext';
import "../../scss/modal.scss"
interface RemoveProps{
  chosenIdx : number[];
}

function RemoveBtn({chosenIdx }:RemoveProps) {
  const { state, setState }= useContext(ImageContext);
  const {cards, setCards} = useContext(CardContext);
  const [open, setOpen] = useState<boolean>(false);

  const onToggle =()=>{
      setOpen(!open)
  }

  const onDelete =(id: number[])=>{
      const newState = [...state]
      id.map(i=>newState.splice(i,1));
      setState(newState);
      setCards(null)
  }

  return (
    <>
    {open && 
        <div className='modal'>
        <div className='modal-container'>
            <div className='modal-img'>
            <FileCopy/>
            <DeleteSweep />
            </div>
            <div className='title'>
                <h2>확인</h2>
            </div>
            <div className='desc'>
                <span>정말 이 이미지를 삭제 하시겠습니까?</span>
            </div>
            <div className='footer'>
                <button className='confirm' id="confirm" onClick={()=>onDelete(chosenIdx)}>삭제</button>
              <button className='close' onClick={onToggle}>돌아가기</button>
            </div>
        </div>
    </div>
    }
    <button type='button' onClick={onToggle}><Delete /></button>
    </>
  )
}

export default RemoveBtn