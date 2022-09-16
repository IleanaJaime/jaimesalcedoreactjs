import React from 'react'
import Swal from 'sweetalert2'
import './ItemListContainer.css'
import { Link } from 'react-router-dom'

export const Item = ({ id, name, lastname, image, logo, price, description, category, stock }) => {

    function onAdd(count) {
        Swal.fire({
            title: 'Listo!',
            text: `Agregaste ${count} PRODUCTO al carrito.`,
        })
    }

    return (
        <div className='classContainer' key={id}>
            <div className='container'>
                <h1>Producto<strong> {name}</strong></h1>
                <h2>{lastname}</h2>
                <img className='img' src={image} alt={lastname} />
                <h5>{category}</h5>
                <Link to={`/details/${id}`}>
                    <button className='btn'>Conocé más de {name}</button>
                </Link>
            </div>
        </div>
    )
}
