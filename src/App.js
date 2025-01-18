import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Estilos globales
import './Components/Header.css'; 
import './Components/BoxVideo.css'; 
import './Components/BackgroundScreen.css';
import './Components/Features.css';

// Componentes
import Header from './Components/Header';
import LoadingScreen from './Components/LoadingScreen';
import NavBar from './Components/NavBar';
import Box from './Components/BoxVideo';
import BackgroundScreen from './Components/BackgroundScreen';

// Páginas
import QuienesSomos from './Pages/QuienesSomos';
import Prendas from './Pages/Prendas';
import RedesSociales from './Pages/RedesSociales';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulación de carga inicial
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Ajusta el tiempo si es necesario
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen />
      ) : (
        <Router>
          <Routes>
            {/* Página principal */}
            <Route
              path="/"
              element={
                <>
                  <NavBar /> {/* Solo se renderiza aquí */}
                  <BackgroundScreen />
                  <div className="video-container">
                    <Box videoSrc="/recursos/Brother.mp4" className="left" />
                    <Box videoSrc="/recursos/Brother.mp4" className="right" />
                    <Box videoSrc="/recursos/Brother.mp4" className="center" />
                  </div>
                  <div className="content">
                    <Header />
                    <section className="features">
                      <div className="feature">
                        <h2>CALIDAD</h2>
                        <p>
                          Nuestra ropa está diseñada con una calidad superior, ideal para hacer ejercicio.
                          Desde el estampado hasta la durabilidad de la tela, priorizamos tanto la comodidad
                          como la facilidad de limpieza.
                        </p>
                      </div>
                      <div className="feature">
                        <h2>EMPAQUE</h2>
                        <p>
                          Nuestro elemento diferenciador comienza desde el primer momento: la ropa llega en
                          una caja meticulosamente diseñada, que no solo protege tu pedido, sino que también
                          te invita a acceder a nuestra plataforma comunitaria.
                        </p>
                      </div>
                      <div className="feature">
                        <h2>SERVICIO</h2>
                        <p>
                          En la plataforma, encontrarás todo el material necesario para dominar eficazmente
                          cada hábito relacionado con el uso de nuestra ropa.
                        </p>
                      </div>
                      <div className="FinalText">
                        <h2>Club de emprendedores y jóvenes en desarrollo personal con enfoque en lo deportivo y lo cotidiano</h2>
                      </div>
                    </section>
                  </div>
                </>
              }
            />
            {/* Páginas adicionales */}
            <Route
              path="/quienes-somos"
              element={
                <>
                  <BackgroundScreen />
                  <QuienesSomos />
                </>
              }
            />
            <Route
              path="/prendas"
              element={
                <>
                  <BackgroundScreen />
                  <Prendas />
                </>
              }
            />
            <Route
              path="/redes-sociales"
              element={
                <>
                  <BackgroundScreen />
                  <RedesSociales />
                </>
              }
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
