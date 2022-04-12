import React from 'react';

import './App.css';
import Header from './components/header';
import Busca from './components/busca';


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";


const App = () => {
 return (
  <>
  <Header/>
    <main>
      
    <Busca/>
  

  <div> 
  </div>
    </main>
  </> 
   )
}
export default App;
