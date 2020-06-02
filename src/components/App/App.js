import React, { Component } from 'react';
import Home from "../Home/Home";
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
        <main>
          <Home />
        </main>
        <footer className="footer">
          <section className="footer__links">
            <IoLogoPinterest className="footer__img" />
            <IoLogoTwitter className="footer__img" />
            <IoLogoFacebook className="footer__img" />
            <MdEmail className="footer__img" />
            <FaFacebookMessenger className="footer__img" />
          </section>
        </footer>
      </>
    );
  }
}



export default App;
