import React, { useState, useEffect } from 'react';
import './Components/Header.css'; 
import './Components/BoxVideo.css'; 
import './Components/BackgroundScreen.css'; 
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
          <BackgroundScreen>
            <Box videoSrc="/videos/MASCOTAS AMIGAS.mp4" />
          </BackgroundScreen>
          <Header />
        </>
      )}
    </div>
  );
}

export default App;
