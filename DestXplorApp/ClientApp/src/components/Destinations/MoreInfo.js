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
        let poiList = res.data.results.map(poi => ({
          id: poi.id,
          name: poi.name,
          score: poi.score,
        }));
        props.setPOIList(poiList);
        console.log(poiList);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <div className="container pb-5">
        <h2 className="mb-5">Point of Interests</h2>
        <div className="container my-2">
          {props.poiList === null || props.poiList === undefined ? 
            <></>
            :
            props.poiList.map(poi => {
              return (
                <DestinationCardItem
                  key={poi.id}
                  name={poi.name}
                  score={poi.score}
                />
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default MoreInfo;