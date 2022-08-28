import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Header/Navbar/Navbar'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const Rutas = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
    </Routes>
</BrowserRouter>
  )
}

export default Rutas