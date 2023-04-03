import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/favoritos">Favoritos</NavLink>
    </nav>
  )
}

export default Nav