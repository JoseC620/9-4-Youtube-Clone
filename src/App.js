import './App.css';
import Navbar from './Components/common/Navbar';
import Home from './Components/common/Home';
import About from './Components/common/About';
import {Route, Routes, Router} from "react-router-dom"

function App() {
  return (
    <div className="App">

    
        <Navbar />
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />


        </Routes>
        
      
      

   YouTube APP

    </div>
  );
}

export default App;

