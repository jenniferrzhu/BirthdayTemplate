import React from "react";
import "./styles/Album.css";
import pic from "../imgs/flowers.jpg";

const PageTemplate = () => {
  return (
    <div className="page">
      <h1>Title</h1>
      <h3>~subtitle~</h3>
      <div className="cards">
        <div className="card">
          <img src={pic} />
          <h3>caption</h3>
        </div>
        <div className="card">
          <img src={pic} />
          <h3>caption</h3>
        </div>
        <div className="card">
          <img src={pic} />
          <h3>caption</h3>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <a className="back" href="/timeline">
        return
      </a>
    </div>
  );
};

export default PageTemplate;
