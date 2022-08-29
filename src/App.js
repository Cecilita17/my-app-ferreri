import React from 'react';
import './SCSS/App.scss';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Rutas from './routes/Rutas';

function App() {
  return (
    <div className="App">
      <Rutas/>
      <Header/>
     <ItemListContainer clase='propsClase' />
    </div>
  );
}

export default App;

