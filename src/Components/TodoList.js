import React from 'react'
import { ThemeContext } from '../context/ThemeContext';
const TodoList = () => {
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isDarkTheme, darkTheme, lightTheme } = context;
            const theme = isDarkTheme ? darkTheme : lightTheme;
            return (
                <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center' }}>
                    <p className='item'>Plan the family trip</p>
                    <p className='item'>Go for shopping for dinner</p>
                    <p className='item'>Go for a walk</p>
                </div>
            )
        }}
        </ThemeContext.Consumer>
    )
}
export default TodoList;