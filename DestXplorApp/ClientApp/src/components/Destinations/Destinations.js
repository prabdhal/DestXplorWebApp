import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HeroSection from '../HeroSection';
import DestinationCards from './DestinationCards';
import { createMainRegionsByCountryAPIEndpoint, createFindCountryByNameAPIEndpoint } from '../../API/api';
import MoreInfo from './MoreInfo';

const Destinations = () => {
  const [countryList, setCountryList] = useState([]);
  const [regionsList, setRegionsList] = useState([]);
  const [country, setCountry] = useState(null);
  const [poiList, setPOIList] = useState([]);

  const location = useLocation();

  useEffect(() => {
    getCountryByName('america');
    getMainRegionsForEachCountry('america');
  }, [])

  const getCountryByName = (country) => {
    createFindCountryByNameAPIEndpoint(country).fetchAll()
      .then(res => {
        console.log(res.data.results);
        let countryList = res.data.results.map(country => ({
          id: country.id,
          name: country.name,
          score: country.score,
          snippet: country.snippet,
        }));
        setCountryList(countryList);
        console.log(countryList);
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
        console.log(regionList);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <HeroSection
        src="./images/Destination.jpg"
        hideButton={false}
      />
      {location.pathname === "/destinations" ?
        <DestinationCards
          getCountryByName={getCountryByName}
          countryList={countryList}
          poiList={poiList}
          country={country}
          setCountry={setCountry}
        />
        :
        <MoreInfo
          poiList={poiList}
          setPOIList={setPOIList}
          country={country}
        />  
      }
    </>
  );
}

export default Destinations;