import React from "react";
import "../styles/styles1.css";

export default class Avg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      sum: 0,
      avg: 0,
    };
  }
  handleClick = () => {
    this.setState(
      {
        sum: parseInt(this.state.number1) + parseInt(this.state.number2),
      },
      () => {
        this.setState({
          avg: this.state.sum / 2,
        });
      }
    );
  };

  render() {
    return (
      <div className="layout">
        <div>
          <label>number</label>
          <input
            className="inputField"
            placeholder="enter a number"
            onChange={(e) => {
              this.setState({ number1: e.target.value });
            }}
          />

          <div />
          <label>number</label>
          <input
            className="inputField"
            placeholder="enter a number"
            onChange={(e) => {
              this.setState({ number2: e.target.value });
            }}
          />
        </div>
        <label>Result</label>

        <div className="result">
          <div> Sum: {this.state.sum}</div>
          <div>Avg: {this.state.avg}</div>
        </div>
        <div>
          <button className="buttonField" onClick={this.handleClick}>
            Click
          </button>
        </div>
      </div>
    );
  }
}
