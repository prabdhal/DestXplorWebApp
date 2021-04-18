import React, { useState, useEffect } from 'react';

import DestinationCardItem from './DestinationCardItem';
import { createFindArticleByCountryAPIEndpoint } from '../../API/api';

const MoreInfo = (props) => {

  useEffect(() => {
    console.log(props.detailsList);
    getDetailsByCountry(props.country);
  }, [])

  const getDetailsByCountry = (country) => {
    createFindArticleByCountryAPIEndpoint(country).fetchAll()
      .then(res => {
        console.log(res.data.results);
        let detailsList = res.data.results;

        props.setDetailsList(detailsList);
        console.log(detailsList);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      {props.detailsList === null || props.detailsList === undefined ?
        <p>No points of interest for {props.country}</p>
        :
        props.detailsList.map(details => {
          return (
            <DestinationCardItem
              key={details.id}
              details={details}
            />
          );
        })
      }
    </>
  );
}

export default MoreInfo;