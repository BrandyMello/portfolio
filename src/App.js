import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brandy Mello</h1>
        <h2>Software Developer</h2>
        <div class="border">
          <div class="projectDisplay">

          </div>
        </div>
        
      </header>
      <main>
        
      </main>
      <footer>
        <button class="btn_contact">Contact</button>
        <div class="links">
        <a class="link_gh" href="https://github.com/BrandyMello">
          <GoMarkGithub />
        </a>
        <a class="link_li" href="https://www.linkedin.com/in/brandy-mello">
          <IoLogoLinkedin />
        </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
