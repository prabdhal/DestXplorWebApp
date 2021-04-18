import React, { useState, useEffect } from 'react';

import DestinationCardItem from './DestinationCardItem';
import { createFindPOIByCountryAPIEndpoint } from '../../API/api';

const MoreInfo = (props) => {

  useEffect(() => {
    console.log(props.poiList);
    getPOIByCountry(props.country);
  }, [])

  const getPOIByCountry = (country) => {
    createFindPOIByCountryAPIEndpoint(country).fetchAll()
      .then(res => {
        console.log(res.data.results);
        let poiList = res.data.results;

        props.setPOIList(poiList);
        console.log(poiList);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      {props.poiList === null || props.poiList === undefined ?
        <p>No points of interest for {props.country}</p>
        :
        props.poiList.map(poi => {
          return (
            <DestinationCardItem
              key={poi.id}
              poi={poi}
            />
          );
        })
      }
    </>
  );
}

export default MoreInfo;