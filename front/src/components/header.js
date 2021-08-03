import React from 'react';
import './styles/header.css';
import logo from '../img/logo_home.png';

function headerTopo() {
    return (
        <header className="App-header">
            <div className='container'>
                <div className="logo"><img src={logo} alt="logo" /></div>
                <ul>
                    <li>
                        <a href='#sobre'>Livros por idade</a>
                    </li>
                    <li>
                        <a href='#contato'>Sobre</a>
                    </li>
                </ul>
            </div>
        </header>
    )
};

export default headerTopo;
