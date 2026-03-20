import React, { createContext, useState } from 'react'

// create kro context,
// provide kro us creted context kh data koh,
// us data koh tum use kro.

export const Themedatacontext = createContext();

const ThemeContext = (props) => {

  const [theme, setTheme] = useState('light')
  return (
    <div>
        <Themedatacontext.Provider value={[theme, setTheme]}>
            {props.children}
        </Themedatacontext.Provider>
        </div>
  )
}

export default ThemeContext