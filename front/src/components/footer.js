import React from 'react';
import './styles/footer.css'

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
    )
};

export default footerContato;

