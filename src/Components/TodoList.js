import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
const TodoList = () => {
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
        // <ThemeContext.Consumer>{(context) => {
        <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center' }}>
            <p className='item'>Plan the family trip</p>
            <p className='item'>Go for shopping for dinner</p>
            <p className='item'>Go for a walk</p>
            <button className='ui button primary ' onClick={changeTheme}>Change the theme</button>
        </div>
    )
    // }}
    // </ThemeContext.Consumer>
}
export default TodoList;