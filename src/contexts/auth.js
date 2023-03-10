import { createContext, useState } from "react"
export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState();
    const [signed, setSigned] = useState(false);
    
    const makeLogin = (login,password) =>{
        let loginParams = { login, password }        
                //process.env.REACT_APP_USER
        fetch(process.env.REACT_APP_USER, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(loginParams),
            cache: 'default',
            type: 'cors'
        }).then(
            (response) => response.json()
        ).then((data) =>{               
            setToken(data.token)   
            setSigned(true)                       
        });
        
    }
    
    return (
        <AuthContext.Provider value={{token:token, signed, makeLogin }} >
            {children} 
        </AuthContext.Provider>
    )
}
