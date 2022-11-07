import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Imc from './pages/Imc';
import Moedas from './pages/Moedas';
import MediaEscolar from './pages/MediaEscolar'
import Termometricas from "./pages/Termometricas";
import Agedog from "./pages/AgeDog";
import Mentalista from "./pages/Mentalista";
import EightBall from "././pages/EightBall";

function RoutesApp() {
  return(
    <BrowserRouter>
      <Navbar />
        <Routes>               
          <Route exact path="/" element={<Home />} />                
          <Route path="/Imc" element={<Imc />} />
          <Route path="/Moedas" element={<Moedas />} />
          <Route path="MediaEscolar" element={<MediaEscolar />} />

          <Route path="Termometricas" element={<Termometricas />} />
          <Route path="AgeDog" element={<Agedog />} />
          <Route path="Mentalista" element={<Mentalista />} />

          <Route path="EightBall" element={<EightBall />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default RoutesApp;