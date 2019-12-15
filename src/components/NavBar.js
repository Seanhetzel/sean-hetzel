import React from "react";

function NavBar() {
  return (
    <header>
      <a className="title nav-btn" href="#home">
        HOME
      </a>
      <a className="title nav-btn" href="#software">
        SOFTWARE
      </a>
      <a className="title nav-btn" href="#hardware">
        HARDWARE
      </a>
      <a className="title nav-btn" href="#contact">
        CONTACT
      </a>
    </header>
  );
}

export default NavBar;
