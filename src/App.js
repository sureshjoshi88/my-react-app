import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import About from './component/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './component/Main';
import React, { useState } from 'react';



function App() {
    const [mode,setmode]=useState("light")
    const [color,setColor] = useState("black")
    const buton = ()=>{
      if(color==="black"){
        setColor("blue")
        let mains = document.getElementById("main-1")
        mains.style.backgroundColor="blue"
      }else{
        let mains = document.getElementById("main-1")
        mains.style.backgroundColor="black"
        setColor("black")
      }
    }
  const toggle=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="#042743"
      document.body.style.color="white"
    }else{
      setmode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"

    }
  }
  return (
    <>
    <Router>
    <Navbar mode={mode} toggle={toggle}/>
    <Routes>
    <Route path="/" element={<Main mode={mode} buton={buton} title="hello how are you"/> } />
    <Route path="/About" element={<About  mode={mode} />} />
    <Route path="/Home" element={<Home  mode={mode} />} />
    </Routes>
    </Router>
    </>
  );
}
export default App;
