import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Trang-chu';
import GioiThieu from './components/Gioi-thieu';
import Header from './components/CompHeader';
import Menu from './components/mune';
import Footer from './components/CompFoot';
import Tintuc from './components/Tin-tuc';
import LienHe from './components/Lien-he';
import SanPham from './components/San-pham';
import DogPlay from './components/Do-choi-cho';
import CatPlay from './components/Do-choi-meo';
import DogFood from './components/Do-an-cho';
import CatFood from './components/Do-an-meo';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gioi-thieu" element={<GioiThieu />} />
          <Route path="/San-pham" element={<SanPham />} />
          <Route path="/Tin-tuc" element={<Tintuc />} />
          <Route path="/Lien-he" element={<LienHe />} />
          <Route path="/Do-choi-cho" element={<DogPlay />} />
          <Route path="/Do-choi-meo" element={<CatPlay />} />
          <Route path="/Do-an-cho" element={<DogFood />} />
          <Route path="/Do-an-meo" element={<CatFood />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
