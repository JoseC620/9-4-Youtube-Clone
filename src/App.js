import './App.css';
import Footer from './Components/common/Footer';
import Navbar from './Components/common/Navbar';
import VideoListing from './Components/Youtube/VideoListing';
import Home from './Components/home/Home';
import About from './Components/about/About';
import VideoIndex from './Components/Youtube/VideoIndex';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">

    <Router>
        <Navbar />
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/Videos' element={<VideoListing />}/>
        <Route path="/About" element={<About />} />
        <Route path='/Videos/:id' element={<VideoIndex />} />

       
        </Routes>
        <Footer />
        
        </Router>
      
    </div>
  );
}

export default App;

