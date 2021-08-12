import React from 'react';
import './styles/modal.css'


function ModalLivro ({children,isOpen,onClickClose}){
    const body = document.getElementById('body-teste');

    if(!isOpen){
        body.style.overflow = 'auto';
        return null;
    }

    if(isOpen == true){
        body.style.overflow = 'hidden';  
    }

    return (
        <div className="container-modal">
            <div className='modal'>
                <button className="btn-modal-close" onClick={onClickClose}>X</button>
                {children}
            </div>
     
        </div>
    )
};

export default ModalLivro;
