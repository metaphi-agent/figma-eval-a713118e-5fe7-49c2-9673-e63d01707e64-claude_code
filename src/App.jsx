import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProductDetail from './pages/ProductDetail'
import CategoryPage from './pages/CategoryPage'
import Cart from './pages/Cart'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/category/:name" element={<CategoryPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
