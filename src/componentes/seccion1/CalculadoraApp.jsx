import React from 'react';
import CabeceraCalculo from './CabeceraCalculo'
import CuerpoCalculo from './CuerpoCalculo'
import CabeceraIndice from '../seccion2/CabeceraIndice';

function CalculadoraApp(){
    return(
        <section className="panel">
            < CabeceraCalculo titulo="Calculadora de IMC" 
                            nombre_clase="cabecera-calculo"
            />
            < CuerpoCalculo />
            < CabeceraIndice />
        </section>
    );
}

export default CalculadoraApp;