import React from 'react'
import FormularioCalculo from './FormularioCalculo';
import VerCalculoIMC from './VerCalculoIMC';
import BasculaIMC from './BasculaIMC';

export default function CuerpoCalculo() {
    return (
        <section className="panel-block">
            <article className="columns is-mobile">
                <FormularioCalculo />
                <VerCalculoIMC 
                altura={150}
                peso={60}
                />
                <BasculaIMC />
            </article>
        </section>

    
    )
}

