import React from 'react';
import { Link } from 'react-router-dom';

import './CardItem.css';

const CardItem = (props) => {

  const colClass = props.colClass ? props.colClass : "col-md-4";

  return (
    <div className={` my-3 ${colClass}`}>
      <Link className="card--item--link" to={props.path}>
        <div className="card">
          <figure className="card--img--wrapper">
            <img
              className="card--img"
              alt={props.src}
              src={props.src} />
          </figure>
          <figcaption className="card--caption" style={{ minHeight: '60px' }}>
            <h5 className="card--caption">{props.headerText}</h5>
          </figcaption>
        </div>
      </Link>
    </div>
  );
}

export default CardItem;