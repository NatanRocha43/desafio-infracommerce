import React, { useState } from 'react'
import './calculadora.css'
import * as math from 'mathjs';
import Backspace from '../assets/icon-backSpace.svg'

const Calculadora = () => {
    const [resultado, setResultado] = useState('');

    
    const handleClick = ( e ) =>{
        setResultado(resultado.concat(e.target.name));
    }
    const limpar = () =>{
        setResultado('')
    }
    const apagar = () =>{
        setResultado(resultado.slice(0, resultado.length - 1))
    }
    const calculo = () => {
        try {
          const res = math.evaluate(resultado);
          setResultado(res.toString());
        } catch (error) {
          setResultado('Erro');
        }
      };
  return (
    <div className='calculadora'>
        <div className='conteiner'>
        <form>
            <input className="display" type='text' defaultValue={resultado} />
        </form>
        <div className='teclas'>
            <button className='limpar' onClick={limpar}>Clear</button>
            <button className='apagar'onClick={apagar}><img  className='icon-backspace'src={Backspace} alt='&larr;'/></button>
            <button className='operacao' name='+' onClick={handleClick}>&#43;</button>  
            <button name='7' onClick={handleClick}>7</button>
            <button name='8' onClick={handleClick}>8</button>
            <button name='9' onClick={handleClick}>9</button>
            <button className='operacao' name='-' onClick={handleClick}>&ndash;</button>
            <button name='4' onClick={handleClick}>4</button>
            <button name='5' onClick={handleClick}>5</button>
            <button name='6' onClick={handleClick}>6</button>
            <button className='operacao' name='*' onClick={handleClick}>&times;</button> 
            <button name='1' onClick={handleClick}>1</button>
            <button name='2' onClick={handleClick}>2</button>
            <button name='3' onClick={handleClick}>3</button>
            <button className='operacao' name='/' onClick={handleClick}>&divide;</button>
            <button name='0' onClick={handleClick}>0</button>
            <button name='.' onClick={handleClick}>.</button>
            <button className='resultado'onClick={calculo}>&#61;</button>
        </div>
      </div>
    </div>
  )
}

export default Calculadora
