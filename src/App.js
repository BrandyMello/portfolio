import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brandy Mello</h1>
        <h2>Software Engineer</h2>
        <a href="https://github.com/BrandyMello">
          <GoMarkGithub />
        </a>
        <a href="https://www.linkedin.com/in/brandy-mello">
          <IoLogoLinkedin />
        </a>
      </header>
      <main>
        
      </main>
    </div>
  );
}

export default App;
