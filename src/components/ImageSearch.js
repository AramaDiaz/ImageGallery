import React from "react";

const ImageSearch = ({ handlePress }) => {
  return (
    <header className="search-box">
      <div className="container">
        <label className="text" htmlFor="input-bar">
          Image Search
        </label>
        <input
          id="input-bar"
          type="text"
          onKeyUp={handlePress}
          placeholder="search image"
        />
      </div>
    </header>
  );
};

export default ImageSearch;
