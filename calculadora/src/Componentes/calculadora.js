import React, {useState} from 'react';
import Boton from './boton';
import Display from './display';

const Calculadora = (props) => {

    const [operacion, setOperacion] = useState('');

    // Calcula el resultado en base a la variable operación
    const calcular = () => {
        try {
            const result = eval(operacion);
            setOperacion(result);
        } catch (e) {
            setOperacion('error')
        }
    }

    // Manejador de evento clic
    const clickListener = (e) => {
        const value = e.target.getAttribute('value');
        switch(value) {
            case 'limpiar':
                setOperacion('');
                break;
            case 'igual':
                calcular()
                break;
            default:
                setOperacion(operacion + value)
                console.log(operacion)
            }
        }

    return (
        <>
        <body>
        <Display operacion={operacion}/>
        <div className='Keypad'>
        <div>
            <Boton value='7' label='7' onClick={clickListener}/>
            <Boton value='8' label='8' onClick={clickListener}/>
            <Boton value='9' label='9' onClick={clickListener}/>
            <Boton value='*' label='X' onClick={clickListener}/>
        </div>
        <div>
            <Boton value='4' label='4' onClick={clickListener}/>
            <Boton value='5' label='5' onClick={clickListener}/>
            <Boton value='6' label='6' onClick={clickListener}/>
            <Boton value='-' label='-' onClick={clickListener}/>
        </div>
        <div>
            <Boton value='1' label='1' onClick={clickListener}/>
            <Boton value='2' label='2' onClick={clickListener}/>
            <Boton value='3' label='3' onClick={clickListener}/>
            <Boton value='+' label='+' onClick={clickListener}/>
        </div>
        <div>
            <Boton value='limpiar' label='C' onClick={clickListener}/>
            <Boton value='0' label='0' onClick={clickListener}/>
            <Boton value='igual' label='=' onClick={clickListener}/>
            <Boton value='/' label='/' onClick={clickListener}/>
        </div>
        </div>
        </body>
        </>        
    )


}

export default Calculadora