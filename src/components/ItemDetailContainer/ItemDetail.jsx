import React, { useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'
import './ItemDetail.css'
import { Link } from 'react-router-dom'


export const ItemDetail = ({ item }) => {
    const [agregarCarrito, setAgregarCarrito] = useState(false);
    const onAdd = () => {
        setAgregarCarrito(true);
    };
    return (
        <div className='DetailContainer' key={item.id}>
            <div className='cardDetail'>
                <h1><strong> {item.name}</strong></h1>

                <img className='img' src={item.image} alt={item.lastname} />
                <div className='cardDetail2'>
                    <h2>Precio: ${item.price}</h2>
                    <p className='description'>Descripción: {item.description}</p>
                    <div>
                        <img className='imglogo' src={item.logo}/>
                    </div>
                </div>

                {agregarCarrito ? (<Link to="/cart" className="btn btn-lg btn-success mt-2" type="button">
                    Finalizar compra
                </Link>
                ) : <ItemCount stock={item.stock} onAdd={onAdd} />
                }

            </div>
        </div>
    )
}