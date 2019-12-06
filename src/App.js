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
        <a href="">
          <GoMarkGithub />
        </a>
        <a href="">
          <IoLogoLinkedin />
        </a>
      </header>
      <main></main>
    </div>
  );
}

export default App;
