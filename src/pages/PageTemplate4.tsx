import React from "react";
import "./styles/Album.css";
import pic1 from "../imgs/flowers.jpg";
import pic2 from "../imgs/tulips.jpg";

const PageTemplate4 = () => {
  return (
    <div className="page">
      <h1>Title</h1>
      <h3>~subtitle~</h3>
      <div className="cards">
        <div className="card">
          <img src={pic2} />
          <h3>caption</h3>
        </div>
        <div className="card">
          <img src={pic1} />
          <h3>caption</h3>
        </div>
        <div className="card">
          <img src={pic2} />
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
      <div className="navigation-links">
        <a className="back" href="/page-template3">
          prev
        </a>
        <a className="back" href="/timeline">
          return
        </a>
        <a className="back" href="/page-template5">
          next
        </a>
      </div>
    </div>
  );
};

export default PageTemplate4;
