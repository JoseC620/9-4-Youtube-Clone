import './App.css';
import Navbar from './Components/common/Navbar';
import VideoListing from './Components/Youtube/VideoListing';
import Home from './Components/home/Home';
import About from './Components/about/About';
import VideoIndex from './Components/Youtube/VideoIndex';
import ErrorModal from './Components/error/ErrorModal';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState } from 'react';


function App() {

  const [search, setSearch] = useState("")
  const [mode, setMode] = useState(false)

  let loadingError = false

  if(search.length === "") {
    loadingError = true
  }



  return (
    <div className="App">
    <Router>
        <Navbar callback={setMode}/>
        <ErrorModal loadingError={loadingError}/>

          <Routes>
            <Route path="/" element={<Home callback={setSearch} mode={mode} loadingError={loadingError}/>} />
            <Route path="/About" element={<About mode={mode}/>} />
            <Route path='/Videos/play/:id' element={<VideoIndex callback={setSearch} mode={mode} />} />
            <Route path='/Videos/search/:searchTerm' element={<VideoListing search={search} mode={mode}/>}/>
          </Routes>
    </Router>
    </div>
  );
}

export default App;

