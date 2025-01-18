import React from "react";
import BackgroundScreen from "../Components/BackgroundScreen"; // Asegúrate de que la ruta sea correcta
import './Components/Cards.css'; // Importa el archivo CSS para las tarjetas

const QuienesSomos = () => {
    return (
        <div className="quienes-somos-container">
            <BackgroundScreen />
            <div className="card-container">
                <div className="card">
                    <h2>Quiénes somos</h2>
                    <p>
                        Somos una empresa que se dedica a la venta de ropa y accesorios para
                        hombres y mujeres. Nuestro objetivo es que nuestros clientes se sientan
                        cómodos y seguros con nuestra ropa, por eso nos esforzamos en ofrecer
                        productos de calidad y a la moda.
                    </p>
                </div>
                <div className="card">
                    <h2>Misión</h2>
                    <p>
                        Nuestra misión es proporcionar ropa de alta calidad que combine estilo y
                        comodidad, permitiendo a nuestros clientes expresar su personalidad y
                        sentirse seguros en su día a día.
                    </p>
                </div>
                <div className="card">
                    <h2>Visión</h2>
                    <p>
                        Nuestra visión es ser una de las marcas de ropa más reconocidas a nivel
                        nacional e internacional. Queremos que nuestros productos sean accesibles
                        para todos y que nuestros clientes se sientan satisfechos con su compra.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default QuienesSomos;
