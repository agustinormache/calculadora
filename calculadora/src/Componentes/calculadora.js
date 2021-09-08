import React, {useState} from 'react';
import Boton from './boton';
import Display from './display';

const Calculadora = (props) => {

    const [operacion, setOperacion] = useState([
        {
            charOperacion : 'Algo'
        }
    ]);

    const escribir = (props) => {
        setOperacion([{ charOperacion: operacion.charOperacion + props.value}]);

    }

    const calcular = () => {
        try {
            const result = eval(operacion.charOperacion);
            setOperacion([{charOperacion: result}]);
        } catch (e) {
            this.setOperacion([{charOperacion: 'error'}])
        }
    }

    const clickListener = e => {
        const value = e.target.getAttribute('value');
        switch(value) {
            case 'limpiar':
                setOperacion([{ charOperacion: ''}]);
                break;
            case 'igual':
                calcular()
                break;
            default:
                escribir()
            }
        }

    return (
        <>
        <Display value={operacion} operacion={operacion}/>
        <div>
            <Boton value='7' escribir={escribir} label='7' onClick={clickListener}/>
            <Boton value='8'escribir={escribir} label='8' onClick={clickListener}/>
            <Boton value='9'escribir={escribir} label='9' onClick={clickListener}/>
            <Boton value='X'escribir={escribir} label='X' onClick={clickListener}/>
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