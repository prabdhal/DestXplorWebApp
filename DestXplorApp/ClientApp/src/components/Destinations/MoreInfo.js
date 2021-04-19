﻿import React, { useState, useEffect } from 'react';

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
        let detailsList = res.data.results;

        props.setDetailsList(detailsList);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      {props.detailsList === null || props.detailsList === undefined ?
        <></>
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