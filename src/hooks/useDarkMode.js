
import useLocalStorage from "./useLocalStorage";
import React, {useEffect} from "react"

 function useDarkMode(key, initialValues){
    const[ values, setValues] = useLocalStorage( key )
   

    useEffect(()=>{
        
        const element = window.document.body;
        
            if(values === true){
                element.classList.add("dark-mode")
            }
            else{
                element.classList.remove("dark-mode")
        }
        },[values]
    );
    return [values, setValues]   
}

export default useDarkMode;