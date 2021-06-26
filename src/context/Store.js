import React,{useState} from 'react'

const intialState={
    name:'Banoth Srikanth',
    Email:'bnthsrikant@gmail.com'
}

 export const Context=React.createContext();

const Store=({children})=>{
    const [value,setValue]=useState(intialState);
    return(
        <Context.Provider value={[value,setValue]}>
            {children}
        </Context.Provider>
    )

}

export default Store
