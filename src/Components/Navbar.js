import React from 'react'
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    //how to using multiple context inside one component
    return (
        <AuthContext.Consumer>{(authenContext) => {
            return (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isLogin, changeAuthStatus } = authenContext;
                    const { isDarkTheme, darkTheme, lightTheme } = themeContext;
                    const theme = isDarkTheme ? darkTheme : lightTheme;
                    return (
                        <nav style={{ background: theme.background, color: theme.text, height: '120px' }}>
                            <h2 style={{ textAlign: 'center' }}>
                                SeaOcean
                            </h2>
                            <p
                                onClick={changeAuthStatus}
                                style={{ textAlign: 'center' }}
                            >
                                {isLogin ? 'logged in' : 'logged out'}
                            </p>
                            <div className='ui three buttons'>
                                <button className='ui button'>Overview</button>
                                <button className='ui button'>Contact</button>
                                <button className='ui button'>Support</button>
                            </div>
                        </nav>
                    )
                }}
                </ThemeContext.Consumer>
            )
        }}

        </AuthContext.Consumer>

    )
}

export default Navbar;