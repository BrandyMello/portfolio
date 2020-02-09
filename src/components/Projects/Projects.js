import React from 'react';
import './Projects.css';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import { WoG } from '../../images/WoGDemo.gif';
import { tripedia } from '../../images/tripediaPics.png';


// const images = [WoG, tripedia];

const Project = () => (
  <main>
    <div className="border">
      <div className="projectDisplay img_display">
        <IoIosArrowBack className="icon_back_arrow"/>
        <img src={tripedia} alt="" />
        <IoIosArrowForward className="icon_forward_arrow"/>
      </div>
    </div>
  </main>
);

export default Project;