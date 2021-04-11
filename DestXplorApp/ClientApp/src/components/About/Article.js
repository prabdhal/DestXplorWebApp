import React from 'react';

const Article = (props) => {
  return (
    <article className="container pb-5">
      <h2 className="mb-5">{ props.title}</h2>
      <div className="row">
        <p className="col-8">
          {props.description}
        </p>
        <div className="col-4 my-5">
          <img className=" rounded-circle" src="./images/AboutSection.jpg" alt="company" height="250px" width="250px" />
        </div>
       </div>
    </article>
  );
}

export default Article;