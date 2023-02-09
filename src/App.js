import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Main from './pages/Main';
import ProductList from './pages/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="productList" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
