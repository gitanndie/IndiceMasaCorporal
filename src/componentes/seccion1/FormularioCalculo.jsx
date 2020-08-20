import React from 'react'

function FormularioCalculo() {
    return (
        <div>
            <label htmlFor="">Peso (Kg)</label>
            <input type="number" name="peso" id="peso" className="caja_texto" />
            <br/>
            <label htmlFor="">Altura (cm) </label>
            <input type="number" name="altura" id="altura" className="caja_texto" />
        </div>
    )
}

export default FormularioCalculo
