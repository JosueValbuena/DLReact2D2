import React, { useContext } from 'react'
import { Mycontext } from '../context/MyContext'
import Card from './Card';

const GaleriaFavoritos = () => {

    const fotos = useContext(Mycontext);

    return (
        <div>
            {fotos.data.filter((ele) => ele.favorito === true).map(
                ele => <div className='container'>
                    <div className='card'
                        key={ele.id}
                        style={{ backgroundImage: `url(${ele.src})` }}>
                        <p>Autor: {ele.autor}</p>
                    </div>
                </div>
            )}
            {console.log(fotos.data)};
        </div>
    )
}

export default GaleriaFavoritos