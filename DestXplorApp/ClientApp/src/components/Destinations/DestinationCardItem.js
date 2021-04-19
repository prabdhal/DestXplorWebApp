import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

import './DestinationCardItem.css';

const DestinationCardItem = (props) => {
  const history = useHistory();
  const location = useLocation();

  const displayScoreStars = (score) => {
    if (score > 10)
      score = score / 2;
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

  const getScore = (score) => {
    if (score > 10)
      score = score / 2;
    return Number((score).toFixed(0));
  }

  const handleClick = (country) => {
    console.log(country);
    props.setCountry(country);
    console.log(props.country);
    console.log(props.detailsList);
    history.push("/destinations/more-info");
  }

  if (location.pathname === "/destinations") {
    return (
      <div className="destination-card-item p-2 my-5">
        <div className="flex-column px-3">
          <h3>{props.name}</h3>
          <div>Rating: {Number((props.score).toFixed(0))}</div>
          <p id="scoreBar">{displayScoreStars(props.score)}</p>
          <p>{props.snippet}</p>
          <a
            style={{ color: "white"}}
            className="btn btn-primary"
            onClick={() => handleClick(props.id)}
          >
            More Info
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="destination-card-item p-2 my-5">
      <div className="flex-column px-3">
        <h3>{props.details.name}</h3>
        <p id="scoreBar">{displayScoreStars(props.details.score)} {getScore(props.details.score)}</p>
        <p>{props.details.snippet}</p>
        <img src={`${props.details.structured_content.images[0].sizes.thumbnail.url}`} />
        <details>
        <summary>More Details</summary>
          {props.details.structured_content.sections.map(article => {
            if (article.summary) {
              return (
                <div key={article.summary}>
                  <h5>{article.title}</h5>
                  <div dangerouslySetInnerHTML={{ __html: article.summary }} />
                </div>
              );
            }
        })}
        </details>
      </div>
    </div>

    );
  
}

export default DestinationCardItem;