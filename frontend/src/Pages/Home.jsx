import React from 'react'
import HeroSection from '../Components/HeroSection';
import About from '../Components/About';
import Qualities from '../Components/Qualities';
import Team from '../Components/Team';
import Footer from '../Components/Footer';
import WhoAreWe from '../Components/WhoAreWe';
import Menu from '../Components/Menu';
import Reservation from '../Components/Reservation';

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Menu />
      <Reservation />
      <Qualities/>
      <WhoAreWe />
      <Team/>
      <Footer/>

      
    </>
  )
}

export default Home
