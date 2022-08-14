import React from "react";

export const Search = ({ handleSumit }) => {
  return (
    <form className="container__search" onSubmit={handleSumit}>
      <input
        className="search-input"
        id="search"
        type="text"
        placeholder="Search id"
      />
      <button className="search-button">Search</button>
    </form>
  );
};
//
