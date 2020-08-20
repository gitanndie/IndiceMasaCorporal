import React from 'react'

let CabeceraCalculo = ({nombre_clase, titulo}) => {
    return (
        <div className={nombre_clase}>
            <h1>{titulo}</h1>
        </div>
    )
}

export default CabeceraCalculo;


