import React,{useEffect,useState} from 'react';
import Backtotop from './components/buttonBackToTop'
import FooterContato from './components/footer';
import HeaderTopo from './components/header';
import FiltroBtn from './components/filtroBtn';
import ModalLivro from './components/modal';
import Pagination from './components/paginacao';
import './styles/listBooks.css';
import axios from 'axios';

const ListBooks = () => {
  
  // const api = 'https://kitsu.io/api/edge/anime';

  const [livros, setItens] = useState([])
  
  useEffect(()=>{
    const fetchData = async () =>{
      const result = axios.get('https://kitsu.io/api/edge/anime')
      .then(response => response.json())
      .then(data => data)

      setItens(result)

    }
    fetchData()
  },[])

  console.log(livros)

  return (
    <div>
      <HeaderTopo />
      <div className='selecao-idade'>
        <div className='title-selecao-livros'>
          <h2>Encante-se com nossa seleção de livros por idade</h2>
        </div>
      </div>
      <FiltroBtn/>

      {livros.data && (
        <ul>
        {livros.data.map(item => {
          return <div className="item"  key={item.id}>
            <img src={item.anime.attributes.posterImage.small} width='40%'/> 
          </div>
        })} 
        </ul>
      )}

      <FooterContato />
      <Backtotop />
    </div>
  )
}

export default ListBooks;