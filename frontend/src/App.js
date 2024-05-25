import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Nav />
        <div className='content-container'>
          <Routes>
            <Route exact path='' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/shop' element={<Shop />} />
          </Routes>
          <Sidebar />
        </div>
      </div>
    </Router>
  );
}

export default App;
