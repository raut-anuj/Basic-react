import React, { useContext } from 'react'
import NavBar2 from './NavBar2'
import { Themedatacontext } from './context/ThemeContext'

const Navbar = () => {
    const data = useContext(Themedatacontext)
    // console.log(data);
    
  return (
    <div>
        <h2>Anuj Kumar</h2>
        <NavBar2 />
    </div>

    
  )
}

export default Navbar