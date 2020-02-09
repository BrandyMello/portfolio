import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";
import './App.css';
import Nav from '../Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <div class="border">
          <div class="projectDisplay">

          </div>
        </div>
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
