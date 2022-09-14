import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../productos.js'
import ItemDetail from './ItemDetail.js'





const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const {id} = useParams()

    const getProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })

    const getById = (array,id) => array.find(element => element.id === id)  

    const getProductsFromDB = async () => {
        try {
            const result = await getProductos;
            console.log(id)
            setItem(getById(result,Number(id)))
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductsFromDB();
    }, []);
    return (
        <div>{item ? <ItemDetail item={item} />: <p>Cargando producto...</p>}</div>
    )}


    export default ItemDetailContainer