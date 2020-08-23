import React from 'react'
import FormularioCalculo from './FormularioCalculo';
import VerCalculoIMC from './VerCalculoIMC';
import BasculaIMC from './BasculaIMC';

export default function CuerpoCalculo() {
    return (
        <section className="panel-block">
            <article className="columns is-mobile">
                <FormularioCalculo 
                nombres={["oscar", "cristian", "sebastian", "monica", "andrea"]} html={<input type="number"/>}
                notas={{nota1:1, nota2:2, nota3:3}}
                html={<input type="number"/>}
                sumarNumeros={(n1,n2) =>{
                    let suma = n1 + n2;
                    return suma;
                }}
                />
                <VerCalculoIMC altura={15} peso={89}/>
                <BasculaIMC/>
            </article>
        </section>

    
    )
}

