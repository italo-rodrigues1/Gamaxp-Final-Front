import React from 'react';
import Backtotop from './components/buttonBackToTop'
import FooterContato from './components/footer';
import HeaderTopo from './components/header';
import FiltroBtn from './components/filtroBtn';
import ModalLivro from './components/modal';
import Pagination from './components/paginacao';
import './styles/listBooks.css'

function listBooks() {
  
  const api = 'https://kitsu.io/api/edge/';

  return (
    <div>
      <HeaderTopo />
      <div className='selecao-idade'>
        <div className='title-selecao-livros'>
          <h2>Encante-se com nossa seleção de livros por idade</h2>
        </div>
      </div>
      <FiltroBtn/>
      <FooterContato />
      <Backtotop />
    </div>
  )
}

export default listBooks