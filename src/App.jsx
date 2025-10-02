import { Routes, Route } from 'react-router-dom';
import navBar from './Componentes/navBar.jsx';
import footer from './Componentes/footer.jsx';
import Dashboard from './Componentes/dashboard.jsx';
import DesarrolloWeb from './Componentes/DesarrolloWeb.jsx';
import Background from './Componentes/Background.jsx';
import About from './Componentes/About.jsx';
import Contacto from './Componentes/Contacto.jsx';

function App() {
  return (
    <div>
      <navBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />           {/* ruta raíz */}
        <Route path="/inicio" element={<Dashboard />} />     {/* opcional */}
        <Route path="/DesarrolloWeb" element={<DesarrolloWeb />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacto" element={<Contacto />} />

      </Routes>
      
      <footer />
      <Background />
    </div>
  );
}

export default App;
