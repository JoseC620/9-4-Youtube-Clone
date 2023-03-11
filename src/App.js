import './App.css';
import Footer from './Components/common/Footer';
import Navbar from './Components/common/Navbar';
import VideoListing from './Components/Youtube/VideoListing';
import About from './Components/common/About';
import {Route, Routes, Router} from "react-router-dom"

function App() {
  return (
    <div className="App">

    
        <Navbar />
        <Routes>

        {/* <Route path="/" element={<Home />} /> */}
        <Route path='/Videos' element={<VideoListing />}/>
        <Route path="/About" element={<About />} />

       
        </Routes>
        <Footer />
        
      
      
    </div>
  );
}

export default App;

