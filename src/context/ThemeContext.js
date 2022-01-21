import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const { children } = props;
    const [theme] = useState({
        isDarkTheme: true,
        lightTheme: {
            text: '#222',
            background: '#d8dd'
        },
        darkTheme: {
            text: '#fff',
            background: '#5c5c5c'
        }
    });
    return (
        <ThemeContext.Provider value={{ ...theme }}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;