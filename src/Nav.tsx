import React from "react";

import { BrowserRouter as Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <nav>
          <Link to={"/"}>
            <h1 id="logo">A Moment In Spacetime</h1>
          </Link>
          <ul>
            <li>
              <div className="about">
                <Link to="/about">About</Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
