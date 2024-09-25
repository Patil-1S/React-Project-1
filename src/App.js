import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
  },1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background ='grey';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.background ='white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      {/* <About/> */}
    </div>
   
  </>
  );
}

export default App;
