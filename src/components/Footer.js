import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Footer extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "lightgrey",
          width: "100%",
          position: "absolute",
          bottom: "0px",
          minHeight: "75px",
          textAlign: "center"
        }}
      >
        <h3>Footer</h3>
      </div>
    );
  }
}
export default Footer;
