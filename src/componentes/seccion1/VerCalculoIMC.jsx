import React from 'react'
import PropTypes from 'prop-types';

function VerCalculoIMC(props) {
    let imc = props.peso/props.altura;
    return (
        <div className="column">
            <h3>IMC</h3>
            <h3>{imc}</h3>
        </div>
    )
}

VerCalculoIMC.propTypes =  {
    peso : PropTypes.number.isRequired,
    altura : function(props, propName, componentName) {
        if(props.altura < 10 || props.altura < 20){
            return new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    },
};

export default VerCalculoIMC
