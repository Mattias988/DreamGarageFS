import About from './pages/About';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Signup from './pages/Sign up';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthService from './Auth/AuthService';
import React, { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   AuthService.logout()
  // },[])
  return (
    <Router>
      <div className='app-container'>
        <div className='content-container'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={
              <PrivateRoute roles={["USER", "ADMIN"]}>
                <Home />
              </PrivateRoute>
            } />
            <Route path='/about' element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            } />
            <Route exact path='/shop' element={
              <PrivateRoute roles={["USER", "ADMIN"]}>
                <Shop />
              </PrivateRoute>
            } />
          </Routes>
          <Sidebar />
        </div>
      </div>
    </Router>
  );
}

export default App;
