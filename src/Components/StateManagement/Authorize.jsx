import { createContext, useEffect, useState } from "react";

const AuthContent = createContext();

const AuthWrapper = ({ children }) => {
	const [loginData, setLoginData] = useState('')

	useEffect(() => {
		if(sessionStorage.getItem('token')) {
			setLoginData(JSON.parse(sessionStorage.getItem('token')))
		}
	}, [children])

	return (
		<AuthContent.Provider value={{loginData,setLoginData}}>
			{children}
		</AuthContent.Provider>
	)

	
}

const authHeader = () => {

    const Token = sessionStorage.getItem("token") ? JSON.parse(sessionStorage.getItem("token")) : null

    if (Token) {
      return {
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${Token.access_token}`,
      }
    } else {
      return null
    }
}

export { AuthContent, AuthWrapper, authHeader }
