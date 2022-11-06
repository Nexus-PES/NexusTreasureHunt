import React from 'react'

//Components
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroAnimate from '../components/HeroAnimate';
import Main from '../components/Main';

export default function Challenges() {
    return (
        <div className="App">
          <Header name="User Name" />
          <HeroAnimate title="NEXUS Treasure Hunt" />
          <Main />
          <Footer />
        </div>
      );
}
