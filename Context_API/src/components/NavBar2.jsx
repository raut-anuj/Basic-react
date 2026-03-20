import React from 'react'
import { useContext } from 'react'
import { Themedatacontext } from './context/ThemeContext'

const NavBar2 = () => {

// const data = useContext(Themedatacontext)
//destructuring kr diye.
const [theme, setTheme] = useContext(Themedatacontext)

  return (
    <div>
        <h4>About</h4>
        <h4>Home</h4>
        <h4>Contact Us</h4>
        <h4>Service</h4>
        <h4>{theme}</h4>
    </div>
  )
}

export default NavBar2