import React, { useState, useEffect } from 'react';
import './Components/Header.css'; 
import './Components/BoxVideo.css'; 
import './Components/BackgroundScreen.css';
import './Components/Features.css'; 
import Header from './Components/Header';
import LoadingScreen from './Components/LoadingScreen';
import NavBar from './Components/NavBar';
import Box from './Components/BoxVideo';
import BackgroundScreen from './Components/BackgroundScreen';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular una carga de datos
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Cambia el tiempo según sea necesario
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingScreen /> : (
        <>
          <NavBar />
          <BackgroundScreen />
          <div className="video-container">
          <Box videoSrc="/recursos/Brother.mp4" className="left" />
          <Box videoSrc="/recursos/Brother.mp4" className="right" />
          <Box videoSrc="/recursos/Brother.mp4" className="center" />
          </div>
          <div className="content">
            <Header />
            <section class="features">
            <div class="feature">
              <h2>CALIDAD</h2>
              <p>
                Nuestra ropa está diseñada con una calidad superior, ideal para hacer ejercicio.
                Desde el estampado hasta la durabilidad de la tela, priorizamos tanto la comodidad
                como la facilidad de limpieza.
              </p>
            </div>
            <div class="feature">
              <h2>EMPAQUE</h2>
                <p>
                  Nuestro elemento diferenciador comienza desde el primer momento: la ropa llega en
                  una caja meticulosamente diseñada, que no solo protege tu pedido, sino que también
                  te invita a acceder a nuestra plataforma comunitaria.
                </p>
            </div>
            <div class="feature">
              <h2>SERVICIO</h2>
                <p>
                  En la plataforma, encontrarás todo el material necesario para dominar eficazmente
                  cada hábito relacionado con el uso de nuestra ropa.
                </p>
            </div>
            </section>
            {/*añadir mas información*/}
            <div style={{ height: '200vh' }}></div>
        </div>
        </>
      )}
    </div>
  );
}

export default App;
