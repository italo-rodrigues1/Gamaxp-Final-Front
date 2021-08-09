import React from 'react';
import './styles/modal.css'
import { AiFillInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import urso from '../img/banner_urso_desktop.jpg'


function ModalLivro (props){

    return (
        <div className="container-modal">
            <div className='modal'>
                <div className='title-modal'>
                    <h2>{this.attributes.titles.en}</h2>
                    <p>{this.attributes.description}</p>
                    <p>{this.attributes.titles.en}</p>
                    <p>{this.attributes.titles.en}</p>
                    <div>
                        Redes Sociais
                        <a href='#'><AiFillInstagram /></a>
                        <a href='#'><RiFacebookFill /></a>
                        <a href='#'><AiOutlineTwitter /></a>
                    </div>
                </div>
                <div className='img-livro'>
                    <img src={props.attributes.posterImage.small} alt='capa do livro'/>
                </div>
            
            </div>
     
        </div>
    )
};

export default ModalLivro;
