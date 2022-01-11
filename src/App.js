import React from "react"; 
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';
import { Home } from './components/Home';
import { AddAccount } from './components/AddAccount';
import { EditAccount } from './components/EditAccount';
import ImageAPI from './components/ImageAPI';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {   
  return (  
    <GlobalProvider>
        <div className="App">
          <Header/>
            <Routes>
              <Route path="/" element={<Home/>} exact />
              <Route path="/add" element={<AddAccount/>} exact />
              <Route path="/edit/:id" element={<EditAccount/>} exact /> 
              <Route path="/imageapi" element={<ImageAPI/>} exact /> 
            </Routes>
          <Footer/> 
        </div>  
    </GlobalProvider>
  );  
}
  
export default App;