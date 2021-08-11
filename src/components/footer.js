import React from 'react';
import './styles/footer.css'
import { Link } from 'react-router-dom';
import politicaPrivacidade from '../img/Politica_Privacidade.pdf';
import temosUso from '../img/Termos_de_uso.pdf';

function footerContato() {
    return (
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
                       <Link to={politicaPrivacidade} target="_blank" className="politica-privacidade">Política de privacidade </Link> <br></br> <Link to={temosUso} target="_blank" className="politica-privacidade">Termos de uso</Link> 
                    </strong>
                </div>
                <div className="formulario">
                    <h3>Fique por dentro das novidades</h3>
                    <form method="post" >
                        <input type="text" placeholder="Seu nome" />
                        <input type="email" placeholder="Email" />
                        <button type="submit">Quero receber novidades</button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default footerContato;

