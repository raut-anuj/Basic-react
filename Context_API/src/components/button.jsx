import React, { useContext } from 'react'
import { Themedatacontext } from './context/ThemeContext';

const button = () => {

        const [theme, setTheme] = useContext(Themedatacontext)

    const changetheme = () => {
        setTheme('Dark');
        
        
    }
  return (
    <div>
        <button onClick={changetheme}
        >Change Theme {theme}</button>
    </div>
  )
}

export default button