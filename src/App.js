import React from 'react';
import './App.css';
import logo from "./Images/mytaj.png";

function App() {
  return (
    <div className="parent">
     <div className="container">
       <div className="imgdiv">
         <img src={logo} alt="logo"></img>
       </div>
       <div className="contentdiv">
       <div className="style" >Utha's Best Full Service, Independent<br/>Website Design And Development Team
       </div>
       <div className="buttonContainer">
        <div className="button1">Pro Website Packages</div>
        <div className="button2">Chat With Us Now</div>
       </div>
       </div>

     </div>
      
    </div>
  );
}

export default App;
