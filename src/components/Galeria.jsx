import React, { useContext } from 'react'
import { Mycontext } from '../context/MyContext'

const Galeria = () => {
    const fotos = useContext(Mycontext);
    
  return (
    <div>Galeria</div>
  )
}

export default Galeria