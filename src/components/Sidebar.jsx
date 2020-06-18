import { Link } from "react-router-dom";
import React, { Component } from "react";
// import { FcComboChart } from "react-icons/fc";

class Navbar extends Component {
  render() {
    return (
      <aside className="col-12 col-md-2 p-0 bg-dark flex-shrink-1">
        <nav className="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start py-2">
          <div className="collapse navbar-collapse ">
            <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
              <li className="navbar-brand">
                <Link to="/billing" className="text-decoration-none">
                  <i className="fa fa-bullseye fa-fw"></i>{" "}
                  <span className="font-weight-bold">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Equinix.svg/1280px-Equinix.svg.png"
                        width="80"
                        height="40"
                        className="d-inline-block align-top"
                        alt=""
                        loading="lazy"
                      />
                  </span>
                </Link>
              </li>
              <hr/>
              <li className="nav-item">
                <Link className="nav-link pl-0" to="/billing">
                  <i className="fa fa-book fa-fw"></i>{" "}
                  <span className="d-none d-md-inline">Billing</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pl-0" to="/datausage">
                  <i className="fa fa-cog fa-fw"></i>{" "}
                  <span className="d-none d-md-inline">Data Usage</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pl-0" to="/account">
                  <i className="fa fa-cog fa-fw"></i>{" "}
                  <span className="d-none d-md-inline">Account</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    );
  }
}

export default Navbar;
