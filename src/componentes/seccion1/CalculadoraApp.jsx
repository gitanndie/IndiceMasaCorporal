import React from 'react';
import CabeceraCalculo from './CabeceraCalculo'
import CuerpoCalculo from './CuerpoCalculo'

function CalculadoraApp(){
    return(
        <section className="panel">
            < CabeceraCalculo titulo="Calculadora de IMC" 
                            nombre_clase="cabecera-calculo"
            />
            < CuerpoCalculo />
        </section>
    );
}

export default CalculadoraApp;