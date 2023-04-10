import { useState } from "react"

type userType = {
    name:string,
    email:string
}
 
export const LoginState = () => {
    // const [user, setUser] = useState<userType | null>(null);
    // instead of null, we can also use {} as userType
    const [user, setUser] = useState<userType | null>({} as userType);
    const handleLogin=()=>{
        setUser({
            name:"Ömer",
            email:"omer@gmail.com"
        })
    }

    const handleLogout=()=>{
        setUser({} as userType);
    }

    return ( 
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h1>{user?.name}</h1>
            <h1>{user?.email}</h1>
        </div>
     );
}