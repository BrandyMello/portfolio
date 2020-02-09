import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Project from '../Projects/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Project />
      <Footer />  
    </div>
  );
}

export default App;
