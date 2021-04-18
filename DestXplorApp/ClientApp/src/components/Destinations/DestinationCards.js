import React from 'react';

import DestinationCardItem from './DestinationCardItem';

const DestinationCards = (props) => {

  const handleChange = e => {
    let searchResult = e.target.value;

    props.getCountryByName(searchResult);
    if (!searchResult)
      props.getCountryByName('america');
  }

  return (
    <div className="container pb-5">
      <h2 className="mb-5">Check Out These Destinations</h2>
      <div className="container my-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a country"
          onChange={handleChange}
        />
        {
          props.countryList.map(region => {
            return (
              <DestinationCardItem
                key={region.id}
                id={region.id}
                name={region.name}
                country={region.country}
                score={region.score}
                snippet={region.snippet}
                images={region.images}
                country={props.country}
                setCountry={props.setCountry}
                poiList={props.poiList}
                getPOIByCountry={props.getPOIByCountry}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default DestinationCards;