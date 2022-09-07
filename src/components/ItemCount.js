import React from 'react'
import { useState } from 'react';

const ItemCount = ({stock,cuentaInicial = 1,onAdd}) => {
    const [contador,setContador] = useState(cuentaInicial);
return (
    <div className= 'contaner'>
        <p className = 'cantidad'>Cantidad</p>
        <button className = "btn btn-danger" onClick ={() =>{contador > cuentaInicial ? setContador (contador - 1): setContador(cuentaInicial)}}>-</button>
        {contador}
        <button className= "btn btn-primary" onClick={() => {contador < stock ? setContador(contador + 1):setContador(stock)}}>+</button>
        <br/>
        <button className= "btn btn-success" onClick={()=> onAdd(contador)}>Agregar al carrito</button>
    </div>
)
}

export default ItemCount