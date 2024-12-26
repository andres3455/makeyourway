import React, { useState, useEffect } from 'react';
import './Components/Header.css'; 
import './Components/Box.css'; 
import Header from './Components/Header';
import LoadingScreen from './Components/LoadingScreen';
import Box from './Components/Box';

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
          <Header />
          <Box videoSrc="/videos/MASCOTAS AMIGAS.mp4" />
        </>
      )}
    </div>
  );
}

export default App;
