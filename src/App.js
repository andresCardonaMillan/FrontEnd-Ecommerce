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
        </Routes> 
        <Footer/>
      </Router>
    </div>
    // <Router>
    //   <div className="App"> 
    //     <NavBar 
    //       allProducts={allProducts}
    //       setAllProducts={setAllProducts}
    //       total={total}
    //       setTotal={setTotal}
    //       countProducts={countProducts}
    //       setCountProducts={setCountProducts}
    //     />
    //     <Routes>
    //       <Route path='/Inicio' element={<Principal/>} />
    //       <Route path='/' element={<Inicio />} />
    //       <Route path='/Descripcion' element={<Descripcion 
    //       nombre= 'Camisa negra'
    //       descripcion = 'lorem ipsum ajsjasjakshakshaknkda haskas ashiashka odahosna soadan daoksokaskaoskaoskaos oasoasoaksoaka oasoakoaksosa jaosjoasjoa oajsoajsoajs oajsoas ojasojaosjoasjoasj ojsoajs ojsoajs ojaosja jasojsoa oajsoa oajsoa nadoa soasnoa aosjoa aosjoa pasnoaso jajoasjoasjm osajosjaosa' 
    //       />} />
    //       <Route path='/Catalogo' element={<ProductList 
          
    //       allProducts={allProducts}
    //       setAllProducts={setAllProducts}
    //       total={total}
    //       setTotal={setTotal}
    //       countProducts={countProducts}
    //       setCountProducts={setCountProducts}          
    //       />} />
    //       <Route path='/Loginpage' element={<LoginPage/>} />
    //       <Route path='/SingupPage' element={<SingupPage/>} />
    //     </Routes>
    //     <Footer/>
    //   </div>
    // </Router>
  );
}

export default App;
