import React from 'react'
import "./index.css";

const Modal = ({onCancel}) => {

    const hello = function() {
        try {
            console.log("try block");
            kamalb
        } catch (error) {
            console.log("error: ", error);
        }
    }
  return (
    <div className='modal-container'>
        <div className='modal-content'>
            <div className='modal-p-tag'>Hello world This is the modal</div>
            <div className='modal-span' onClick={onCancel}>X</div>
        </div>
    </div>
  )
}

export default Modal