import { CurrentUser } from "@/lib/appwrite";
import React, { createContext, useContext, useEffect } from "react";


const GlobalContext = createContext<any>(undefined);
export const useGlobalContext = () => useContext(GlobalContext);


export default function GlobalProvider({ children }: { children: React.ReactNode }){

  const [isLogged, setIsLogged] = React.useState(false);
  const [user, setUser] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);


  useEffect(() => {
    CurrentUser().then((res)=>{
      if(res){
        setIsLogged(true);
        setUser(res);
      } else {
        setIsLogged(false);
        setUser(null);
      }
    }).catch((err)=>{
      console.log(err);
    }).finally(()=>{
      setLoading(false);
    })
  }, []);

  return (
    <GlobalContext.Provider value={{isLogged, user, loading, setUser, setIsLogged}}>
        {children}
    </GlobalContext.Provider>
  )
}




