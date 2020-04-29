import React, { Component } from 'react';
import {
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoFacebook
} from "react-icons/io";
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
// import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <header>
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
