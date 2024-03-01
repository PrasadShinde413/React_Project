import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode is Enabled","Success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Ligth Mode is Enabled","Success");

    }
  }

  
  return (
    <>
      {/* if you know the what to give title or AboutTitle */}
      {/* <Navbar title="Doc" AboutTitle="About" /> */}

      {/* if you dont known anything default values will be put on     */}
      {/* <Navbar/> */}
<Router>

      <Navbar title='Doc' mode={mode}  toggleMode={toggleMode} AboutTitle = "About"/>
      <Alert  alert={alert} />
      <div className= "container my-3">
      <Routes>
            <Route excat path="/About" element={<About />}>
          </Route>
          <Route excat path="/" element ={<Form  showAlert={showAlert} heading="Enter The Text" />}>
          </Route>
          </Routes> 
      </div>
      </Router>
    </>
  ); 
}


export default App;
