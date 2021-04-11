import React from 'react';

import HeroSection from '../HeroSection';
import Cards from './Cards';

const Home = () => {
  return(
      <>
        <HeroSection
          src="./images/Home.jpg"
          showButton={true}
        />
        <Cards />
      </>
    );
}

export default Home;
