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

  const [darkMode, setDarkMode] = useState(false);

  const handleModeChange = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
    <Router>
        <Navbar onModeChange={handleModeChange}/>
          <Routes>
            <Route path="/" element={<Home  callback={setSearch} />} />
            <Route path="/About" element={<About />} />
            <Route path='/Videos/play/:id' element={<VideoIndex callback={setSearch} />} />
            <Route path='/Videos/search/:searchTerm' element={<VideoListing search={search}/>}/>
          </Routes>
    </Router>
    </div>
  );
}

export default App;

