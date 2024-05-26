"use client"
import { createContext, useContext, useState } from "react"

const ThemeProvider = createContext("")


export const StateContext = ({children}) => {
  
     const [authentication, setAuthentication] = useState(false)
     const statuses = ["active", "inactive", "blacklisted", "pending"];
     const getRandomStatus = () => statuses[Math.floor(Math.random() * statuses.length)];
     const arr = new Array(30).fill(null).map(() => getRandomStatus());

  return (
    <ThemeProvider.Provider value={{authentication, setAuthentication, arr}}>
        {children}
    </ThemeProvider.Provider>
  )
}

export const useStateContext = () => useContext(ThemeProvider)