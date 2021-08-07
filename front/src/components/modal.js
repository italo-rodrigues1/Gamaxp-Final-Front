import React from 'react';
import './styles/modal.css'
import { AiFillInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import urso from '../img/banner_urso_desktop.jpg'
// import passarinho from '../img/passarinho.png'

const ModalLivro = () => {
    return (
        <div className="container-modal">
            <div className='modal'>
                <div className='title-modal'>
                    <h2>Como é bom dormir</h2>
                    <p>Descrição</p>
                    <p>Autor</p>
                    <p>Editora</p>
                    <div>
                        Redes Sociais
                        <a href='#'><AiFillInstagram /></a>
                        <a href='#'><RiFacebookFill /></a>
                        <a href='#'><AiOutlineTwitter /></a>
                    </div>
                </div>
                <div className='img-livro'>
                    <img src={urso} alt='capa do livro'/>
                </div>
            </div>
        </div>
    )
};

export default ModalLivro;
