
import './App.css';
import Footer from './components/Footer';
import { NavBar } from './components/Navbar';
import Descripcion from './components/Descripcion';
import Principal from './pages/Principal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import {ProductList} from './pages/Catalogo';

function App() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

  return (
    <Router>
      <div className="App"> 
        <NavBar 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
        <Routes>
          <Route path='/' element={<Principal />} />
          <Route path='/Descripcion' element={<Descripcion 
          nombre= 'Camisa negra'
          descripcion = 'lorem ipsum ajsjasjakshakshaknkda haskas ashiashka odahosna soadan daoksokaskaoskaoskaos oasoasoaksoaka oasoakoaksosa jaosjoasjoa oajsoajsoajs oajsoas ojasojaosjoasjoasj ojsoajs ojsoajs ojaosja jasojsoa oajsoa oajsoa nadoa soasnoa aosjoa aosjoa pasnoaso jajoasjoasjm osajosjaosa' 
          />} />
          <Route path='/Catalogo' element={<ProductList 
          
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}          
          />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
