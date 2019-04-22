import React from "react";

function Nav(props) {
  return <nav className="navbar">
  <ul>
    <li className="brand"><a href="/">{props.brand}</a></li>
    <li className="">{props.middle}</li>
    <li>{props.scores}</li>
  </ul>
</nav>;
}

export default Nav;
