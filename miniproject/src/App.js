import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/pages/Main';
import ProductList from './components/pages/ProductList';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import ProductDetail from './components/pages/ProductDetail';



function App() {
  return (
    <div className="App">
      <Main/>
      <ProductList />
    </div>
  );
}

export default App;
