import './App.css';
import Footer from './components/Footer';
import { NavBar } from './components/Navbar';
import Descripcion from './components/Descripcion';
import Principal from './pages/Principal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import {ProductList} from './pages/Catalogo';
import {LoginPage} from './pages/Loginpage'
import { SingupPage } from './pages/SingupPage';
import { Inicio } from './pages/Inicio';
import { PersonalizacionPage } from './pages/PersonalizacionPage';
import EncargadoPage from './pages/Encargado';
import DesignerView from './pages/Diseñador';
import { Orden } from './pages/Orden';

function App() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

  return (
    <div className="App">    
     <Router>
      
        <Routes> 
          <Route path="/" element={<Inicio />} />
          <Route path="/Encargado" element={<EncargadoPage />} />
          <Route path="/Diseñador" element={<DesignerView />} />
          <Route path='/Loginpage' element={<LoginPage/>} />
          <Route path='/SingupPage' element={<SingupPage/>} />
          <Route path="/Inicio"  element={
            <>
          <NavBar 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
          <Principal 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}  
          /> </>
        } />
          <Route path="/Catalogo"  element={
          <>
          <NavBar 
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
          <ProductList
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}  
          /> 
          </>
          } />
          <Route path="/Descripcion"  element={
          <>
          <NavBar 
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
          <Descripcion 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}  
          /> 
          </>
          } />
          <Route path="/PersonalizacionPage"  element={
          <>
          <NavBar 
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
          <PersonalizacionPage
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}  
          /> 
          </>
          } />
          <Route path="/Orden"  element={
            <>
          <NavBar 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
          <Orden 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}  
          /> </>
        } />
        </Routes> 
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
