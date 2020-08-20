import React from 'react'

function TablaIMC({IMC, items}) {
    return (
        <div>
            <table className="table" id="table">
        <thead>
            <tr>
            <th scope="col">IMC</th>
            <th scope="col">SITUACION</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">{IMC}</th>
            <td>{items}</td>
            </tr>
            <tr>
            <th scope="row"></th>
            </tr>
            <tr>
            <th scope="row"></th>
            </tr>
        </tbody>
        </table>
        </div>
    )
}

export default TablaIMC
