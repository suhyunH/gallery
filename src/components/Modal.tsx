import React from 'react'
import "../scss/modal.scss"

interface ModalProps {
    open: boolean
    setOpen: (v: boolean) => void; 
}
function Modal() {
  return (
    <div className='modal'>
        <div className='modal-container'>
            <div className='modal-img'>이미지</div>
            <div className='title'>
                <h2>확인</h2>
            </div>
            <div className='desc'>
                <span>정말 이 이미지를 삭제 하시겠습니까?</span>
            </div>
            <div className='footer'>
                <button className='confirm'>삭제</button>
               <button className='close' >돌아가기</button>
            </div>
        </div>

    </div>
  )
}

export default Modal