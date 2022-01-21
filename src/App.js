import React from 'react'
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';
import ThemeContextProvider from './context/ThemeContext';
function App() {
    return (
        <div className='App'>
            <div className='ui raised very padded text container segment'>
                <ThemeContextProvider>
                    <Navbar />
                    <TodoList />
                </ThemeContextProvider>

            </div>
        </div>
    )
}

export default App;