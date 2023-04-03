import React, { useContext } from 'react'
import { Mycontext } from '../context/MyContext'

const Galeria = () => {
    const fotos = useContext(Mycontext);
    console.log(fotos.data)
  return (
    <div className='container'>
      {fotos.data.map( (ele)=> 
      <div className='card' key={ele.id} style={{backgroundImage: `url(${ele.src})`}}>
        <p>Autor: {ele.autor}</p>
      </div>)}
    </div>
  )
}

export default Galeria