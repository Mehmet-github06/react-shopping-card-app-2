import React, {useEffect, useState} from 'react';
import "./App.css";
import Navbar from "./components/navbar";
import Amazon from "./components/amazon";



function App() {
  return (
    <React.Fragment>
     <Navbar/>
     <Amazon/>
    </React.Fragment>
  );
}

export default App;
