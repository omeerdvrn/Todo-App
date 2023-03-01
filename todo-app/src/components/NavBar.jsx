import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">Todo App</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>Tasks</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
