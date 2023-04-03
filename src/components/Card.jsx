import React from 'react'
import HeartSvg from './HeartSvg'

const Card = (ele) => {
    return (
        <div className='container'>
            <div className='card'
            style={{ backgroundImage: `url(${ele.src})` }}>
            <HeartSvg like={ele.favorito} />
            <p>Autor: {ele.autor}</p>
        </div>
        {console.log(ele)}
        </div>
    )
}

export default Card