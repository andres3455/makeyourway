import React from "react";
import BackgroundScreen from "../Components/BackgroundScreen"; // Asegúrate de que la ruta sea correcta

const QuienesSomos = () => {
    return (
        <div className="quienes-somos-container">
            <BackgroundScreen />
            <div className="content">
                <h1>Quiénes somos</h1>
                <p>
                    Somos una empresa que se dedica a la venta de ropa y accesorios para
                    hombres y mujeres. Nuestro objetivo es que nuestros clientes se sientan
                    cómodos y seguros con nuestra ropa, por eso nos esforzamos en ofrecer
                    productos de calidad y a la moda.
                </p>
            </div>
        </div>
    );
}

export default QuienesSomos;
