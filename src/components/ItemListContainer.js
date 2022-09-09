import React from 'react';
import "../App";
import { useEffect, useState } from 'react'
import products from '../productos.js';

const ItemListContainer = () => {
        const [items, setItems] = useState([])
        const getProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })

        const getProductsFromDB = async () => {
            try {
                const result = await getProductos;
                setItems(result);
            } catch (error) {
                console.log(error);
            }
            }
            
            useEffect(() => {
            getProductsFromDB();
            }, []);  
        return (
        <div>
            <ItemList items={items}/>
        </div>
        )
    }
    

export default ItemListContainer