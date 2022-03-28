import React, { useState, createContext, useReducer, useEffect, useContext } from 'react';
import data from "../misc/mock-data.json"
import { Data } from './model';

type ImageContextProviderProps={
    children : React.ReactNode
}
type ImageContextProps={
    state: Data[];
    setState: React.Dispatch<React.SetStateAction<Data[]>>
}

export const ImageContext = createContext<ImageContextProps>({} as ImageContextProps);

export const ImageContextProvider = ({children}:ImageContextProviderProps)=>{
    const [state, setState] = useState([data.renderings][0])
    return <ImageContext.Provider value={{ state, setState}}>
        {children}
    </ImageContext.Provider>

}
