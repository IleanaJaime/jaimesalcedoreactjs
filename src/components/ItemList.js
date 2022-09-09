import React from 'react'
import Item from './Item'

const ItemList = () => {
return (
    <div>
        {
            items.map((item)=>{
                return <Item
                key={item.id}
                titulo={item.titulo}
                descripcion={item.descripcion}
                img={item.img}
                stock={item.stock}
                id={item.id}
                />
            })
        }
    </div>
)
}

export default ItemList