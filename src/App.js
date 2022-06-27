import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import About from './pages/About';
import Nav from './pages/Nav';


const App = () => {

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    
  }, [])

  return (
    <>
      <Router>
        <Nav>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/playlist' element={<Playlist/>} />
            <Route path='/what-is-thall' element={<About/>} />
          </Routes>
        </Nav>
      </Router>
    </>
  );
}

export default App;