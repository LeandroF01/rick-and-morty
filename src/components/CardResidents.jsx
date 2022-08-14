import React from "react";
import { useFetch } from "../hooks/useFetch";
import Atropos from "atropos/react";
import "atropos/css";

export const CardResidents = ({ url }) => {
  const response = useFetch(url);

  const circleStatus = () => {
    if (response?.status === "Alive") {
      return "status-alive";
    }
    if (response?.status === "Dead") {
      return "status-dead";
    }
    return "status-unknown";
  };

  return (
    <div>
      <Atropos
        className="my-atropos"
        rotateTouch={"scroll-y"}
        onRotate={(x, y) => ("Rotate", x, y)}>
        {
          <article className="container__card-residents">
            <img
              className="card-image"
              src={response?.image}
              alt=""
              data-atropos-offset="-5"
            />
            <h4 data-atropos-offset="7" className="card-title">
              {response?.name}
            </h4>
            <ul data-atropos-offset="4">
              <li className="status-li">
                <span className="card-text__span">Status:</span>
                {response?.status}
                <div className={`circle-status ${circleStatus()}`}></div>
              </li>
              <li>
                <span className="card-text__span">Episode:</span>
                {response?.episode?.length}
              </li>
              <li>
                <span className="card-text__span">Origin:</span>
                {response?.origin?.name}
              </li>
            </ul>
          </article>
        }
      </Atropos>
    </div>
  );
};
