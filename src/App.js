import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";


function App() {
  const [mode, setMode ] = useState('light'); 
  const [alert, setAlert] = useState(null)
  const showAlert=(message, type)=>{
    setAlert({
      message:message,
      type:type
    })

  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled!", "success")
      document.title="TextUtils-Dark mode"
    }else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("light mode has been enabled!","danger")
      document.title="TextUtils-Light mode"
    }

  }
  return ( 
  // <Router>

   <div className="App">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-4 ">
      <TextForm heading="Enter the text to analyze" mode={mode}/>
      <About/>
      {/* <switch>
        <Route path='/about'>
        <About/>
        </Route>
        <Route path='/about'>
        <TextForm heading="Enter the text to analyze" mode={mode}/>
        </Route>
        </switch> */}
      </div>
     
      </div>
  // {/* </Router> */}



  );
}

export default App;
