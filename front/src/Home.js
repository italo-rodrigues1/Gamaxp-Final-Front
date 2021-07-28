import React from 'react';
import imgHero from './img/imgHero.jpg';
import { Link } from 'react-router-dom';
import './styles/Home.css';

function Home() {
    return (
        <div className="App">

            <section>
                <header className="App-header">
                    <div className="logo">logo</div>
                    <ul>
                        <li>
                            <a href='#sobre'>Listar todos os livros</a>
                        </li>
                        <li>
                            <a href='#contato'>Contato</a>
                        </li>
                    </ul>
                </header>
                <div className="hero">
                    <div className="title">
                        <h3>Aqui vamos descrever em duas linhas nossa proposta de valor</h3>
                        <p>Textinho auxiliar para reforçar a linha acima</p>
                        <Link className='btn-hero' to="#">Conheça a gente</Link>
                    </div>
                    <div className='image-hero'>
                        <img src={ imgHero} alt='imagem principal'/>
                    </div>
                </div>
                <div className="descriptionHero">
                    <img src={imgHero} alt="imagem da descrição" />
                    <span>texto lá de baixo no hero </span>
                </div>
            </section>

            <section id="sobre">
                <img src={imgHero} alt="imagem sobre" />
                <div className="title-sobre">
                    <h3>
                        Nessa seção vamos explicar melhor sobre as recomendações que temos
                    </h3>
                    <p>
                        E os benefícios que nossa seleção de produtos trará,
                        metodologias utilizadas na escolha dos materiais
                    </p>
                    <strong>
                        Desenvolva a empatia em seus filhos
                    </strong>
                    <p>
                        Contextualização do tópico
                    </p>
                    <strong>
                        Criatividade, imaginação e diversão
                    </strong>
                    <p>
                        Contextualização do tópico
                    </p>
                    <Link to="/livros">
                        Veja a nossa seleção
                    </Link>
                </div>
            </section>

            <section id="beneficios">
                <h2>
                    Benefícios para os pais e crianças comprovados
                </h2>
                <p>
                    Subtítulo
                </p>
                <div>
                    <div>

                    </div>
                    <div>
                        <span>
                            Beneficio 1
                        </span>
                    </div>
                    <div>

                    </div>
                    <div>
                        <span>
                            Beneficio 2
                        </span>
                    </div>
                    <div>

                    </div>
                    <div>
                        <span>
                            Beneficio 3
                        </span>
                    </div>
                    <div>

                    </div>
                    <div>
                        <span>
                            Beneficio 4
                        </span>
                    </div>
                </div>
            </section>

            <section id="contato">
                <div className="description-contato">
                    <h2>
                        Informações sobre a gente
                    </h2>
                    <p>
                        Endereço, telefone e redes sociais
                    </p>
                    <strong>
                        Precisa de ajuda?
                    </strong>
                    <p>
                        Entre em contato através do e-mail
                    </p>
                    <strong>
                        suporte@nossamarca.com.br
                    </strong>
                    <p>
                        Seg - Sex : 9h às 18h
                    </p>
                    <strong>
                        Política de privacidade <br></br> Termos de uso
                    </strong>
                </div>
                <div className="formulario">
                    <h2>Fique por dentro das novidades</h2>
                    <form>
                        <input type="text" placeholder="Seu nome" />
                        <input type="email" placeholder="Email" />
                        <button type="submit" value="Enviar"></button>
                    </form>
                </div>
            </section>
        </div >
    );
}

export default Home;