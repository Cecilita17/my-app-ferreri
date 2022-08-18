import React from 'react';
import './SCSS/App.scss';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer clase='propsClase' msg='Hola, soy un mensaje de ItemListContainer pasado por props' />
      <Main/>
    </div>
  );
}

export default App;

