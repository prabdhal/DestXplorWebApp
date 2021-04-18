import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

import './DestinationCardItem.css';

const DestinationCardItem = (props) => {
  const history = useHistory();
  const location = useLocation();

  const displayScoreStars = (score) => {
    let rounded = Number((score).toFixed(0));

    if (rounded === 1)
      return (<i className="fa fa-star"></i>);
    else if (rounded === 2) {
      return (
        <span>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </span>
      );
    } else if (rounded === 3) {
      return (
        <span>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </span>
      );
    } else if (rounded === 4) {
      return (
        <span>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </span>
      );
    } else if (rounded === 5) {
      return (
        <span>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </span>
      );
    } else if (rounded === 6) {
      return (
        <span>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </span>
      );
    } else if (rounded === 7) {
      return (
        <span>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </span>
      );
    } else if (rounded === 8) {
      return (
        <span>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </span>
      );
    } else if (rounded === 9) {
      return (
        <span>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </span>
      );
    } else if (rounded === 10) {
      return (
        <span>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </span>
      );
    }
  }

  const handleClick = (country) => {
    console.log(country);
    props.setCountry(country);
    console.log(props.country);
    console.log(props.poiList);
    history.push("/destinations/more-info");
  }

  return (
    <div className="destination-card-item p-2 my-5">
      <div className="flex-column px-3">
        <h3>{props.name}</h3>
        <p id="scoreBar">{displayScoreStars(props.score)} {Number((props.score).toFixed(0))}</p>
        {location.pathname === "/destinations" ?
          <>
            <p>{props.snippet}</p>
            <a
              className="btn btn-primary"
              onClick={() => handleClick(props.id)}>
              More Info
            </a>
          </>
          :
          <>
            <p>Best</p>
          </>
        }
      </div>
    </div>
  );
}

export default DestinationCardItem;