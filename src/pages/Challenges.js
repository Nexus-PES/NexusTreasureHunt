import React from 'react'

//Components
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroAnimate from '../components/HeroAnimate';
import Main from '../components/Main';
import { useAuth } from '../contexts/AuthContext';
export default function Challenges() {
  const {currentUser}=useAuth()
    return (
        <div className="App">
          <Header name={currentUser.email} />
          <HeroAnimate title="NEXUS Treasure Hunt" />
          <Main />
          <Footer />
        </div>
      );
}
