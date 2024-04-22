import Nav from './components/Nav';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Nav />
        <div className='content-container'>
          <Routes>
            <Route exact path='/' element={<Home />}/>
              
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
