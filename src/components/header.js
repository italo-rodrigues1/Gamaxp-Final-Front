import React from 'react';
import './styles/header.css';
import logo from '../img/logo_home.png';
import { Link } from 'react-router-dom';

function headerTopo() {
    return (
        <header className="App-header">
            <div className='container'>
                <div className="logo"> <Link to="/"><img src={logo} alt="logo" /></Link></div>
                <ul>
                    <li>
                        <Link to='list-books'>Livros por idade</Link>
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
