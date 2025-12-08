import React from "react";
import { Outlet } from "react-router-dom";
import "./AppLayout.scss";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <nav className="app-nav">
        <ul className="app-ul">
          <li>
            <a href="#0">Home</a>
          </li>
          <li>
            <a href="#0">About</a>
          </li>
          <li>
            <a href="#0">Clients</a>
            <ul className="app-submenu">
              <li>
                <a href="#0">Burger King</a>
              </li>
              <li>
                <a href="#0">Southwest Airlines</a>
              </li>
              <li>
                <a href="#0">Levi Strauss</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#0">Services</a>
            <ul className="app-submenu">
              <li>
                <a href="#0">Print Design</a>
              </li>
              <li>
                <a href="#0">Web Design</a>
              </li>
              <li>
                <a href="#0">Mobile App Development</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#0">Contact</a>
          </li>
        </ul>
      </nav>
      <Outlet /> {/*이거 있어야지 페이지에 고정 가능*/}
    </div>
  );
};

export default AppLayout;
