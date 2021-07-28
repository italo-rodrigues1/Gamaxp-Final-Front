import React from 'react';
import imgHero from './img/imgHero.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">

            <section>
                <header className="App-header">
                    <div className="logo">logo</div>
                    <ul>
                        <li>listar todos os livros</li>
                        <li>Contato</li>
                    </ul>
                </header>
                <div className="hero">
                    <div className="title">
                        <span>texto</span>
                        <p>texto2</p>
                        <Link to="#">trocar pelo link</Link>
                    </div>
                    <div className="descriptionHero">
                        <img src={imgHero} alt="imagem da descrição" />
                        <span>texto lá de baixo no hero </span>
                    </div>
                </div>
            </section>

            <section id="sobre">
                <img src={imgHero} alt="imagem sobre" />
                <div className="title-sobre">

                </div>
            </section>

            <section id="beneficios"></section>

            <section id="contato">
                <div className="description-contato"></div>
                <div className="formulario">
                    <h2>Fique por dentro das novidades</h2>
                    <form>
                        <input type="text" placeholder="Seu nome" />
                        <input type="email" placeholder="Email" />
                        <button type="submit" value="Enviar"></button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Home;