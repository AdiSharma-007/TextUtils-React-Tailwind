import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About'
import {useState} from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

function App() {
   const[mode,setmode] =useState("light")
   const [alert,setAlert]=useState()
    
      const handleToggle = () => {
        
        if(mode==="light"){
          setmode("dark")
          document.body.style.backgroundColor="#3c3c3c";
                handleAlert("success"," Changed to Dark Mode");
        }else{
          setmode("light")
          document.body.style.backgroundColor="white";
           handleAlert("success"," Changed to Light Mode");
        }

        
      };
       const handleAlert=(type,message)=>{
        setAlert({
          type:type,
          msg:message
          
        });
        setTimeout(()=>{
          setAlert(null);
        },2000);
    };

 
  return (
    <>
    <Router>
    <Navbar handleToggle={handleToggle} handleAlert={handleAlert} mode={mode}/>
    <Alert alert={alert}/>
   
   <Routes>
    <Route exact path="/about" element={<About mode={mode}/>}/>
     <Route exact path="/" element={<TextForm handleAlert={handleAlert} mode={mode}/>}/>
  

   </Routes>
    </Router>
    
    </>
  );
}

export default App;
