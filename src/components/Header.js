import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "lightgrey",
          width: "100%",
          minHeight: "75px",
          marginBottom: "80px",
          textAlign: "center"
        }}
      >
        <h3>Header</h3>
      </div>
    );
  }
}
export default Header;
