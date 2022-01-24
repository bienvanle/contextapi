import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const { children } = props;
    const [theme, settheme] = useState({
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

    const changeTheme = () => {
        settheme({
            ...theme,
            isDarkTheme: !theme.isDarkTheme
        })
    }
    return (
        <ThemeContext.Provider value={{ ...theme, changeTheme: changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;