import React from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';







function App() {
  return (
    <div className="App">
      <Navbar isLogin={false} />
      <Footer />
    </div>
  );
}

export default App;
