import React, { useState } from 'react'

const Componente1 = () => {
    return (
        <Componente2 />
    )
}
const Componente2 = () => {
    const isDarkMode = React.useContext(AppContext)
    return (
        <>
            <p>Esta Modo Oscuro? {isDarkMode}</p>
        </>
    )
}

const AppContext = React.createContext();
const Context = () => {
    const [isDarkMode, setIsDarkMode] = useState('Si')
    return (
        <AppContext.Provider value={isDarkMode}>
            <Componente1 />
        </AppContext.Provider>
    )
}

export default Context