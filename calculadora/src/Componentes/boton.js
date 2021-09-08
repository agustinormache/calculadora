import React from 'react';

const Boton = (props) => {
    return (
        <>
        <button onClick={props.onClick} value={props.value}>{props.label}</button>
        </>
    )
}

export default Boton;