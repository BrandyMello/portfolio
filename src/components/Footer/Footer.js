import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => (
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
);

export default Footer;
