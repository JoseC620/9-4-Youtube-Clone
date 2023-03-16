import './App.css';
import Navbar from './Components/common/Navbar';
import VideoListing from './Components/Youtube/VideoListing';
import Home from './Components/home/Home';
import About from './Components/about/About';
import VideoIndex from './Components/Youtube/VideoIndex';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState } from 'react';


function App() {

  const [search, setSearch] = useState("")
  const [mode, setMode] = useState(false)

  const [darkMode, setDarkMode] = useState(false);

  const handleModeChange = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
    <Router>
        <Navbar callback={setMode}/>

          <Routes>
            <Route path="/" element={<Home  callback={setSearch} mode={mode} />} />
            <Route path="/About" element={<About mode={mode}/>} />
            <Route path='/Videos/play/:id' element={<VideoIndex callback={setSearch} mode={mode} />} />
            <Route path='/Videos/search/:searchTerm' element={<VideoListing search={search} mode={mode}/>}/>
          </Routes>
    </Router>
    </div>
  );
}

export default App;

