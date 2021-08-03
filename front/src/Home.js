import React from 'react';
import logo from './img/logo_home.png';
import passarinho from './img/passarinho.png'
import { Link } from 'react-router-dom';
import './styles/Home.css';
import Backtotop from './components/buttonBackToTop'

function Home() {
    return (
        <div className="App">

            <section>
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
                <div className="hero">
                    <div className='container'>
                        <div className="title">
                            <h3>Viaje com o seu pequeno por <br></br>lugares incríveis através da leitura.</h3>
                            <Link className='btn-hero' to="#">Embarque aqui</Link>
                        </div>
                    </div>
                </div>
                <div className="tarja-MEC">
                    <img src={passarinho} alt="pássaro lendo" />
                    <span>Somos reconhecidos pelos melhores profissionais em Educação, Psicologia e Pedagogia, por disponibilizar<br></br> em nosso catálogo títulos de qualidade que proporcionam a melhor experiência de aprendizagem infantil. </span>
                </div>
            </section>

            <section id="sobre">
                <div className='container'>
                    <div className="title-selecao">
                        <h3>
                            Títulos cuidadosamente selecionados!
                        </h3>
                        <p>
                            Cada fase das crianças é única, assim como a forma que elas aprendem e se desenvolvem.
                        </p>
                        <p>
                            Através de uma curadoria com especialistas de Educação, Psicologia e Pedagogia, nós selecionamos os melhores títulos de literatura infatil e infanto-juvenil.
                        </p>
                        <Link className="btn-selecao" to="/livros">
                            Encante-se com nossa seleção de livros
                        </Link>
                    </div>
                </div>
            </section>

            <section id="beneficios">
                <div className="main">
                    <h4>
                        Benefícios comprovados para os pais e crianças
                    </h4>
                    <div className="main-box">
                        <div>
                            <img src={passarinho} alt="desenvolve a compreensão" />
                            <span>
                                Desenvolve a compreensão
                            </span>
                        </div>
                        <div>
                            <img src={passarinho} alt="aumenta o vocabulário" />
                            <span>
                                Aumenta o vocabulário
                            </span>
                        </div>
                        <div>
                            <img src={passarinho} alt="incentiva a imaginação" />
                            <span>
                                Incentiva a imaginação
                            </span>
                        </div>
                        <div>
                            <img src={passarinho} alt="estimula atitudes éticas" />
                            <span>
                                Estimula atitudes éticas
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contato">
                <div className="contato">
                    <div className="description-contato">
                        <h2>
                            Era uma vez...
                        </h2>
                        <p>
                            Um grupo de amigos que acreditavam que a leitura tinha o poder de transformar vidas. Esses amigos uniram suas habilidades para criar um portal mágico cujo propósito é unir crianças (de todas as idades) ao mundo encantado que existe dentro das páginas de cada livro.
                        </p>
                        <strong>
                            Precisa de ajuda?
                        </strong>
                        <p>
                            Entre em contato através do e-mail suporte@livrertido.com.br
                        </p>
                        <strong>
                            Política de privacidade <br></br> Termos de uso
                        </strong>
                    </div>
                    <div className="formulario">
                        <h3>Fique por dentro das novidades</h3>
                        <form>
                            <input type="text" placeholder="Seu nome" />
                            <input type="email" placeholder="Email" />
                            <button type="submit">Quero receber novidades</button>
                        </form>
                    </div>
                </div>
            </section>
            <Backtotop />
        </div >
    );
}

export default Home;