import React from 'react';

const Boton = (props) => {
    return (
        <>
        <button onClick={() => props.onClick }>{props.label}</button>
        </>
    )
}

export default Boton;