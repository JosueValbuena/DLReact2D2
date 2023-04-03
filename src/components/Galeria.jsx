import React, { useContext, useState } from 'react'
import { Mycontext } from '../context/MyContext'
import HeartSvg from './HeartSvg';

const Galeria = () => {
    const fotos = useContext(Mycontext);
    const [liked, setLiked] = useState(false)

    const handleClick = (e) => {
      let likedIndex = fotos.data.findIndex((ele) => ele.id === e);
      let prueba = !fotos.data[likedIndex].favorito;
      console.log(likedIndex, fotos.data)
      console.log(prueba)
    }

  return (
    <div className='container'>
      {fotos.data.map( (ele)=> 
      <div className='card' 
      key={ele.id} 
      style={{backgroundImage: `url(${ele.src})`}}
      onClick={() => handleClick(ele.id)}>
        <HeartSvg like={ele.favorito}/>
        <p>Autor: {ele.autor}</p>
      </div>)}
    </div>
  )
}

export default Galeria