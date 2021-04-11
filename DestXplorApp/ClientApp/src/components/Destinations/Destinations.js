import React, { useState, useEffect} from 'react';

import HeroSection from '../HeroSection';
import DestinationCards from './DestinationCards';
import { createMainRegionsByCountryAPIEndpoint, createFindCountryByNameAPIEndpoint } from '../../API/api';

const Destinations = () => {
  const [countryList, setCountryList] = useState([]);
  const [regionsList, setRegionsList] = useState([]);

  useEffect(() => {
    getCountryByName('america');
    getMainRegionsForEachCountry('america');
  }, [])

  const getCountryByName = (country) => {
    createFindCountryByNameAPIEndpoint(country).fetchAll()
      .then(res => {
        console.log(res);
        let countryList = res.data.results.map(country => ({
          id: country.id,
          name: country.name,
          score: country.score,
          snippet: country.snippet,
        }));
        setCountryList(countryList);
      })
      .catch(err => console.log(err));
  }

  const getMainRegionsForEachCountry = (country) => {
    createMainRegionsByCountryAPIEndpoint(country).fetchAll()
      .then(res => {
        console.log(res);
        let regionList = res.data.results.map(region => ({
          id: region.id,
          name: region.name,
          country: region.country_id,
          images: region.images,
          // after clicking the region, get thumbnail image or medium image and caption, 
              // use these regions or images
          score: region.score,
          snippet: region.snippet,
        }));
        setRegionsList(regionList);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <HeroSection
        src="./images/Destination.jpg"
        hideButton={false}
      />
      <DestinationCards
        getCountryByName={getCountryByName}
        countryList={countryList}
      />
    </>
  );
}

export default Destinations;