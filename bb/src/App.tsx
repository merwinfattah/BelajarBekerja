import React from 'react';
import SignInPage from './pages/SignInPage';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';








function App() {
  return (
    <React.Fragment>
      <div className='mx-auto'>
        <Router>
          <Routes>
            <Route path='/Home' element={<LandingPage/>}/>
            <Route path='/Masuk' element={<SignInPage/>}/>
            <Route path='/Daftar' element={<SignUpPage/>}/>
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
