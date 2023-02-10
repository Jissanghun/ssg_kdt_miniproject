import './App.css';
import Main from './components/pages/Main';
import ProductList from './components/pages/ProductList';
import Footer from '/componets/layout/Footer';
import Header from '/componets/layout/Header';
import Cart from '/componets/pages/Cart';


function App() {
  return (
    <div className="App">
      <Main/>
      <ProductList />
    </div>
  );
}

export default App;
