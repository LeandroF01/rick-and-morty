import React from "react";

export const LocationInfo = ({ location }) => {
  return (
    <article className="container___card-location">
      <h2 className="location__title ">{location?.name}</h2>
      <ul className="location-content">
        <li className="location-info">
          <span>Type:</span> {location?.type}
        </li>
        <li className="location-info">
          <span>Dimension:</span> {location?.dimension}
        </li>
        <li className="location-info">
          <span>Population:</span> {location?.residents?.length}
        </li>
      </ul>
    </article>
  );
};
