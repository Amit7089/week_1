import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './assets/components/header/index';
import Home from './Pages/Home';
// import Search from './assets/components/Search';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
    </>
  );
}

export default App;
