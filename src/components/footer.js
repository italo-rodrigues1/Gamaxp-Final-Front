import React, { useState }from 'react';
import './styles/footer.css'
import { Link } from 'react-router-dom';
import politicaPrivacidade from '../img/Politica_Privacidade.pdf';
import temosUso from '../img/Termos_de_uso.pdf';
import axios from 'axios';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const  FooterContato = () => {

   

    const [emailUser,setEmailUser] = useState('')
    const [emailNome,setEmailNome] = useState('')
    const [erro,setErro] = useState(false)


    

    const HandleSubmit = (e) =>{
        e.preventDefault();
        axios.post("https://gamaxpfinalapi.herokuapp.com/send",{emailUser:emailUser,emailNome:emailNome})
        .then(response =>{
            setErro(true)
            setTimeout(() => {
                setErro(false);
            }, 8000);
        })
        .catch(err =>{ setErro(false)} )
    }

   
    
    

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
                        Entre em contato através do e-mail livrertido@gmail.com
                    </p>
                    <strong>
                       <Link to={politicaPrivacidade} target="_blank" className="politica-privacidade">Política de privacidade </Link> <br></br> <Link to={temosUso} target="_blank" className="politica-privacidade">Termos de uso</Link> 
                    </strong>
                </div>
                <div className="formulario">
                    <h3>Fique por dentro das novidades</h3>
                    <form method="post" onSubmit={HandleSubmit}>       
                        <input type="text" placeholder="Seu nome" onChange={value => setEmailNome(value.target.value)}  pattern="[A-Za-zÀ-ú ']{4,}" required /> 
                        
                        <input type="email" placeholder="Email" onChange={(e) => setEmailUser(e.target.value)} required />
                       
                        <button type="submit">Quero receber novidades</button>

                    </form>
                </div>
            </div>
            { erro  ? 
                    <div className="container-erro success">
                        <AiOutlineCheckCircle/>
                        <p>Email enviado com sucesso!!</p>
                    </div>

                    :  false}
        </section>
    )
};



export default FooterContato;

