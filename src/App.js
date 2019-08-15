import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    count: ["bangung", "mandi", "sikatgigi"],
    name: ""
  };
  renderData = () => {
    var jsx = this.state.count.map((val, idx) => {
      return (
        <li style={{ marginTop: "20px" }}>
          {val}{" "}
          <input
            style={{ marginLeft: "50px" }}
            type="button"
            value="Delete"
            className="btn-danger"
            onClick={() => this.setState(this.state.count.splice(idx, 1))}
          />
        </li>
      );
    });
    return jsx;
  };

  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <h3> To Do List</h3>
          <ol style={{ margin: "auto" }}>{this.renderData()}</ol>
          <br />
          <input type="text" ref="inputku" placeholder="Masukan text" />{" "}
          <input
            type="button"
            value="ADD TODO"
            onClick={() => {
              this.setState(this.state.count.push(this.refs.inputku.values));
            }}
          />
        </div>
        <div className="bot-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
