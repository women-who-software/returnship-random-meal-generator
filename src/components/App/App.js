import React, { Component } from 'react';
import {
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoFacebook
} from "react-icons/io";
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import Logo from '../../assets/plate.opt.svg';
import './App.scss'
// import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <> //should we put div here?
        <header>
          <img src={Logo} alt=''/>
          <h1>Recipe Roulette</h1>
        </header>
        <footer>
          <IoLogoPinterest/>
          <IoLogoTwitter/>
          <IoLogoFacebook/>
          <MdEmail/>
          <FaFacebookMessenger/>
        </footer>
      </>
    )
  }
}



export default App;
