import React from 'react'
import { ThemeContext } from '../context/ThemeContext';
const TodoList = () => {
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isDarkTheme, darkTheme, lightTheme, changeTheme } = context;
            const theme = isDarkTheme ? darkTheme : lightTheme;
            return (
                <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center' }}>
                    <p className='item'>Plan the family trip</p>
                    <p className='item'>Go for shopping for dinner</p>
                    <p className='item'>Go for a walk</p>
                    <button className='ui button primary ' onClick={changeTheme}>Change the theme</button>
                </div>
            )
        }}
        </ThemeContext.Consumer>
    )
}
export default TodoList;