import React from 'react';
import './Projects.css';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Project = () => (
  <main>
    <div className="border">
      <div className="projectDisplay">
        <IoIosArrowBack className="icon_back_arrow"/>
        <IoIosArrowForward className="icon_forward_arrow"/>
      </div>
    </div>
  </main>
);

export default Project;