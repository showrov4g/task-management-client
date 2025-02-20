import { useState } from "react";
import MyContext from "./MyContext";



const AuthProvider = ({children}) => {
    const [user, setUser] = useState("ghosh")

    const info={
        user
    }

    return (
       <MyContext.Provider value={info}>
        {children}
       </MyContext.Provider>
    );
};

export default AuthProvider;