import React from "react";
import "./SavingsCalculator.css";

export const Video = (props) => {
  return (
    <div className="video-container">
      <h3>{props.text}</h3>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${props.id}`}
        title="House in the USA"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
