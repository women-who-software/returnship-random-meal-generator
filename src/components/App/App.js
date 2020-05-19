import React, { Component } from 'react';
import {
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoFacebook
} from "react-icons/io";
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import Logo from '../../assets/plate.opt.svg';
// import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <header class="header">
          <img
            src={Logo}
            alt="Plate setting image for a logo"
            class="header__logo"
          />
          <h1 class="header-primary">Tasty Temptations</h1>
        </header>
        <footer class="footer">
          <IoLogoPinterest class="footer__img footer__pin"/>
          <IoLogoTwitter class="footer__img footer__tweet"/>
          <IoLogoFacebook class="footer__img footer__fb"/>
          <MdEmail class="footer__img footer__email"/>
          <FaFacebookMessenger class="footer__img footer__fb-mess"/>
        </footer>
      </>
    );
  }
}



export default App;
