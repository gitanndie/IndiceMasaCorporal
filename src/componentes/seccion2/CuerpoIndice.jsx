import React from 'react'
import TablaIMC from './TablaIMC'

const datos = [
    {
        card : "bajo de peso",
        imc : "menor a 18.5"
    },
    {
        card : "normal peso",
        imc : "18.5, 24.9"
    },
    {
        card : "sobrepeso grado I",
        imc : "25, 26.9"
    },
    {
        card : "sobrepeso grado II",
        imc : "27, 29.9"
    },
    {
        card : "Obesidad tipo I",
        imc : "30, 34.9"
    },
    {
        card : "Obesidad tipo II",
        imc : "35, 39.9"
    },
    {
        card : "Obesidad tipo III morvida",
        imc : "40, 49.9"
    },
    {
        card : "Obesidad tipo IV extrema",
        imc : "mayor a 50"
    },

]


export const CuerpoIndice = () => {
    return (
        <div>
            {datos.map(dato => (
                <TablaIMC
                    imc={dato.imc}
                    items={dato.card} 
                />
            ))}
        </div>
    )
}

export default CuerpoIndice
