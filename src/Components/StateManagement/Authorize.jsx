//Import react hooks
import { createContext, useEffect, useState } from "react";

// Create instance of content
const AuthContent = createContext();

// Create wrapper for defining access to content
const AuthWrapper = ({ children }) => {
  // Define data
  const [loginData, setLoginData] = useState("");

  // Set data
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoginData(JSON.parse(sessionStorage.getItem("token")));
    }
  }, [children]);

  // Send data
  return (
    <AuthContent.Provider value={{ loginData, setLoginData }}>
      {children}
    </AuthContent.Provider>
  );
};

// Shortcut to sending standar header in http requests
const authHeader = () => {
  const Token = sessionStorage.getItem("token")
    ? JSON.parse(sessionStorage.getItem("token"))
    : null;

  if (Token) {
    return {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${Token.access_token}`,
    };
  } else {
    return null;
  }
};

// Defining exports
export { AuthContent, AuthWrapper, authHeader };
