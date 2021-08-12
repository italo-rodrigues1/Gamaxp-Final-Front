import React from 'react';
import passarinho from './img/passarinho.png';
import beneficio1 from './img/beneficio1.png';
import beneficio21 from './img/beneficio21.svg';
import beneficio3 from './img/beneficio3.png';
import beneficio4 from './img/beneficio4.png';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import Backtotop from './components/buttonBackToTop';
import FooterContato from './components/footer';
import HeaderTopo from './components/header';

function Home() {
    return (
        <div className="App">
            <section>
                <HeaderTopo />
                <div className="hero"></div>
                <div className='container-title'>
                        <div className="title-hero">
                            <h3>Viaje com o seu pequeno por <br></br>lugares incríveis através da leitura</h3>
                            <a className='btn-hero' href="#sobre">Embarque aqui</a>
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
                        <Link className="btn-selecao"  to="/list-books">
                           Descubra nossa seleção de livros
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
                            <img src={beneficio1} alt="desenvolve a compreensão" />
                            <span>
                                Desenvolve a compreensão
                            </span>
                        </div>
                        <div>
                            <img src={beneficio21} alt="aumenta o vocabulário" />
                            <span>
                                Aumenta o vocabulário
                            </span>
                        </div>
                        <div>
                            <img src={beneficio3} alt="incentiva a imaginação" />
                            <span>
                                Incentiva a imaginação
                            </span>
                        </div>
                        <div>
                            <img src={beneficio4} alt="estimula atitudes éticas" />
                            <span>
                                Estimula atitudes éticas
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <FooterContato />
            <Backtotop />
        </div >
    );
}

export default Home;