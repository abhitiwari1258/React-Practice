import { createContext, useContext, useState } from "react";

const MyContext = createContext()  // creation

const useMyContext = ()=>{   // useContext
    return useContext(MyContext)
}

// provide context

const ContextProvider = ({children})=>{
    const [count,setCount] = useState(0)

    const value = {
        count,
        setCount
    }
    return(
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
    )
}

export {useMyContext,ContextProvider}