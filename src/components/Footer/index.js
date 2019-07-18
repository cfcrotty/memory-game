import React from "react";

function Footer(props) {
  return <footer className="footer">
    <div className="bottom">{props.title} <img alt="react" src={props.url} /></div>
  </footer>;
}

export default Footer;
