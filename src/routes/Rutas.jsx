import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const Rutas = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Rutas