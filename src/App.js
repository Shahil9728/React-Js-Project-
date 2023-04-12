import './App.css';
import {Routes, Route } from 'react-router-dom';
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Home from './Home'
import Error from './Error'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Footer from './Footer';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
