// VideosPage.js

import React from "react";

const VideosPage = () => {
  return (
    <div>
      <div className="videos-section">
        <div className="video-container">
          <h3>What 1 Million Dollars Can Buy in Chicago</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ziRVIkJKP0U"
            title="House in the USA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="video-container">
          <h3>What 5 Million Reais Can Buy in Rio de Janeiro</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OuN4NWdtUZw"
            title="Real Estate in Brazil"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
