import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ImageDetail from './Pages/ImageDetail';
import "./scss/reset.scss"
import {ImageContextProvider} from "./misc/useContext"
function App() {
  return (
   
    <div className='App'>
    <ImageContextProvider>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/image/:id" element={<ImageDetail />}/>
      </Routes>
    </ImageContextProvider>
  
    </div>
  );
}

export default App;
