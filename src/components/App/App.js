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
        <header className="header">
          <img
            src={Logo}
            alt="Plate setting image for a logo"
            className="header__logo"
          />
          <h1 className="header-primary">Tasty Temptations</h1>
        </header>
        <footer className="footer">
          <IoLogoPinterest className="footer__img footer__pin"/>
          <IoLogoTwitter className="footer__img footer__tweet"/>
          <IoLogoFacebook className="footer__img footer__fb"/>
          <MdEmail className="footer__img footer__email"/>
          <FaFacebookMessenger className="footer__img footer__fb-mess"/>
        </footer>
      </>
    );
  }
}



export default App;
