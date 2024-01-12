import { useState } from 'react';
import './App.css';
import About from '../../textutils-app/src/components/About';
import Navbar from '../../textutils-app/src/components/Navbar';
import TextForm from '../../textutils-app/src/components/TextForm';
import Alert from '../../textutils-app/src/components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode ,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }
 
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      document.body.style.color='white';
      showAlert("Light Mode","success");
    
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Dark Mode","success");
    }
  }
  return (

    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Router>
      <Routes>
        
        <Route path="textutils-app/about" element={<About />} />
        <Route path="/" element={<TextForm heading ="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>} />
        
      </Routes>
    </Router>

      </div>
    </>
  );
}

export default App;
