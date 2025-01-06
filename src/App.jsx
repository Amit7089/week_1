import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './assets/components/header/index';
import Home from './Pages/Home';
import ProductListing from './assets/components/ProductListing';
// import Search from './assets/components/Search';

import Footer from '../src/assets/components/Footer/index'
import Login from './assets/components/Login/login';
import Register from './assets/components/Login/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productListing" element={<ProductListing />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
         
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
