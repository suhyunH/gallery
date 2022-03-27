import React, { createContext } from 'react';
import data from "../misc/mock-data.json"

type ImageContextProviderProps={
    children : React.ReactNode
}
export const ImageContext = createContext(data);

export const ImageContextProvider = ({children}:ImageContextProviderProps)=>{
    return <ImageContext.Provider value={data}>
        {children}
    </ImageContext.Provider>

}
