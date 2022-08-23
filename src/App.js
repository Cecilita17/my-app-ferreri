import React from 'react';
import './SCSS/App.scss';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header/>
     <ItemListContainer clase='propsClase' msg='Hola, soy un mensaje de ItemListContainer pasado por props'/>
    </div>
  );
}

export default App;

