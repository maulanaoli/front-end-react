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
        <tr>
          <td>{idx + 1}.</td>
          <td>{val}</td>
          <td>
            {" "}
            <input
              style={{ marginLeft: "50px" }}
              type="button"
              value="Delete"
              className="btn-danger"
              onClick={() => this.setState(this.state.count.splice(idx, 1))}
            />
          </td>
        </tr>
      );
    });
    return jsx;
  };
  addData = () => {
    var isi = this.state.count;

    isi.push(this.state.name);
    this.setState({ count: isi });
    this.refs.inputku.value = "";
  };
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="text-center">
          <h3> To Do List</h3>
          <div className="d-flex justify-content-center">
            <table className="table-light">{this.renderData()}</table>
          </div>
          <br />
          <input
            className=""
            type="text"
            ref="inputku"
            placeholder="Masukan text"
            onChange={() => this.setState({ name: this.refs.inputku.value })}
          />
          <input
            className="btn btn-success"
            type="button"
            value="ADD TODO"
            onClick={this.addData}
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
