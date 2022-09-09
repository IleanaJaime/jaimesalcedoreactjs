import React from 'react'

const Item = (props) => {
return (
    <div className='container'>
        <ul className='item'>
            <img img={props.img} alt="producto"/>
            <li>{props.titulo}</li>
            <li>{props.descripcion}</li>
        </ul>
    </div>
)
}

export default Item