import React from "react";
import logo from "../../../assets/Images/newradhaLogo.png";
const Logo = () => {
  return (
    <div className="nav-header">
      <div className="brand-logo">
        <a href="#">
          <b className="logo-abbr">
            <span id="sidebar-logo-short"></span>
            {/* <img 
               id="sidebar-logo-short"
              src="/assets/images/favicon.png"
               alt="ddd" /> */}
          </b>
          {/* <span  className="logo-compact"> */}
          <span id="sidebar-logo-short"></span>
          {/* </span> */}
          <span className="brand-title">
            {/* <img className="sidebar-logo" id="sidebar-logo" src={logo} alt="logo"/> */}
            <img
              className="sidebar-logo"
              // id="sidebar-logo"
              src="https://bhau777.com/static/media/Logo for green background.ac1f73bae0ea0c69ac997a52eadeb291.svg"
              // src={'https://khatri555.com/static/media/khatri_new_logo.00dfee743e6c2a111c1d95b4f821bf8a.svg'}
              alt="logo"
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Logo;
