/**
 * Exportar:
 * - user {email, nome, id, foto}
 * - login(username, password)
 * - logout()
 * 
 * Regras:
 * 1 - Criar o contexto OK
 * 2 - Criar o provider OK
 * 2.1 - Exportar as variáveis e as funcoes
 * 3 - Construir o hook personalizado (opcional) OK
 */

import { createContext, useState, useContext } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const login = (username, password) => {
        // chamada de api 
        const fakeUser = { username: username, nome: 'Yan', foto: 'https://'}
        setUser(fakeUser)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// Hook personalizado para usar o contexto
export const useAuth = () => useContext(AuthContext);