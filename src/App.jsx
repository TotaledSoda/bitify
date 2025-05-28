import { Routes, Route } from 'react-router-dom';
import NavBar from './Componentes/navBar.jsx';
import Footer from './Componentes/footer.jsx';
import Inicio from './Componentes/inicio.jsx';
import DesarrolloWeb from './Componentes/DesarrolloWeb.jsx';
import Backgroun from './Componentes/Backgroun.jsx';
import About from './Componentes/About.jsx';
import Contacto from './Componentes/Contacto.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />           {/* ruta raíz */}
        <Route path="/Inicio" element={<Inicio />} />     {/* opcional */}
        <Route path="/DesarrolloWeb" element={<DesarrolloWeb />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacto" element={<Contacto />} />

      </Routes>
      
      <Footer />
      <Backgroun />
    </div>
  );
}

export default App;
