import React from 'react';

import CardItem from './CardItem';

const Cards = () => {
  return (
    <section className="container-xl pb-5">
      <h2 className="section-header">Explore Some of The Most Popular Destinations</h2>
      <div className="row">
        <CardItem
          colClass="col-md-6"
          src="./images/img-2.jpg"
          headerText="Come visit the mountains"
          path="/destinations"
        />
        <CardItem
          colClass="col-md-6"
          src="./images/img-3.jpg"
          headerText="Come visit the plains"
          path="/destinations"
        />
        <CardItem
          src="./images/img-4.jpg"
          headerText="Come visit the desert"
          path="/destinations"
        />
        <CardItem
          colClass="col-md-4"
          src="./images/img-5.jpg"
          headerText="Come visit the beautiful city"
          path="/destinations"
        />
        <CardItem
          colClass="col-md-4"
          src="./images/img-6.jpg"
          headerText="Come visit Greece"
          path="/destinations"
        />
      </div>
    </section>
  );
}

export default Cards;