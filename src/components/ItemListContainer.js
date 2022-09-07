import React from 'react';
import "../App";
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
return (
    < div className='contenedor'>
        <h1 className= 'bienvenida'>{props.bienvenida}</h1>
        <div className='contador'>
            <ItemCount stock='5'/>
        </div>
    </div>
)
}

export default ItemListContainer