import React, {useState} from 'react';
import Boton from './boton';
import Display from './display';

const Calculadora = (props) => {

    const [operacion, setOperacion] = useState('');

    // Actualiza la variable operacion | Setea el display
    const escribir = (value) => {
        setOperacion(operacion + value);
        console.log(operacion)

    }

    // Calcula el resultado en base a la variable operación
    const calcular = () => {
        try {
            const resultado = eval(operacion);
            setOperacion(resultado);
        } catch (e) {
            this.setOperacion('error')
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
        <Display value={operacion} operacion={operacion}/>
        <div>
            <Boton value='7' escribir={escribir} label='7' onClick={clickListener}/>
            <Boton value='8'escribir={escribir} label='8' onClick={clickListener}/>
            <Boton value='9'escribir={escribir} label='9' onClick={clickListener}/>
            <Boton value='*'escribir={escribir} label='X' onClick={clickListener}/>
        </div>
        <div>
        <Boton value='4'escribir={escribir} label='4' onClick={clickListener}/>
            <Boton value='5'escribir={escribir} label='5' onClick={clickListener}/>
            <Boton value='6'escribir={escribir} label='6' onClick={clickListener}/>
            <Boton value='-'escribir={escribir} label='-' onClick={clickListener}/>
        </div>
        <div>
        <Boton value='1'escribir={escribir} label='1' onClick={clickListener}/>
            <Boton value='2'escribir={escribir} label='2' onClick={clickListener}/>
            <Boton value='3'escribir={escribir} label='3' onClick={clickListener}/>
            <Boton value='+'escribir={escribir} label='+' onClick={clickListener}/>
        </div>
        <div>
        <Boton value='0'escribir={escribir} label='0' onClick={clickListener}/>
            <Boton value='limpiar'escribir={calcular} label='CE' onClick={clickListener}/>
            <Boton value='igual' escribir={calcular} label='=' onClick={clickListener}/>
            <Boton value='/'escribir={escribir} label='/' onClick={clickListener}/>
        </div>
        </>        
    )


}

export default Calculadora