import React from 'react';
import './styles/modal.css'

import urso from '../img/banner_urso_desktop.jpg'


function ModalLivro ({children,isOpen,onClickClose}){

    if(!isOpen){
        return null;
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
