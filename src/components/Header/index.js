import React from "react";

function Header(props) {
  return <header className="header">
  <h1>{props.h1}</h1>
  <h2>{props.h2}</h2>
</header>;
}

export default Header;
