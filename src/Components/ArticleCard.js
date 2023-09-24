import React from "react";

export default function ArticleCard() {
  return (
    <div className="container">
        <div className="card has-background-info my-3 px-3"> 
        
      <div className="columns">
        <div className="column">
          <figure className="image is-128x128">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder"
            />
          </figure>
        </div>
        <div className="column">
          <div className="article has-text-centered pt-6 pr-6 mr-6">
            {" "}
            Link To Article
          </div>
        </div>
      </div>
    </div>
        </div>
  );
}
