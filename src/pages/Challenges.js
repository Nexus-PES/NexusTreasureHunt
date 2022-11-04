import React from 'react'

//Components
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroAnimate from '../components/HeroAnimate';
import Main from '../components/Main';
// import Navbar from "../components/Navbar";

export default function Challenges() {
    return (
        <div className="App">
          {/* <Navbar /> */}
          <Header name="User Name" />
          <HeroAnimate title="NEXUS Treasure Hunt" />
          <Main />
          <Footer />
        </div>
      );
}
