import React from "react";
import "../styles/style3.css";
export default class Class6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      job: "",
      task: [
        {
          job: " Ansumun ",
        },
      ],
      task2: [
        {
          job1: " Ansumun ",
        },
      ],
      item: "",
    };
  }

  handleInput1 = (e) => {
    this.setState({
      job: e.target.value,
    });
  };

  handlePush = () => {
    var temp = this.state.task;
    temp.push({
      job: this.state.job,
    });
    this.setState({
      task: temp,
      job:""
    });
  };

  handleDelete = (e, index) => {
    var temp = this.state.task;
    var ele = temp.splice(index, 1);
    console.log(ele[0].job);
    var temp2 = this.state.task2;
    temp2.push({
      job1: ele[0].job,
    });
    this.setState({
      task2: temp2,
    });

    this.setState({
      task: temp,
    });
  };

  render() {
    return (
      <div className="layout"> 
        <div>
          {this.state.item}
          <div className="button">
            <input
              placeholder="Enter The name"
              className="inputField"
              value={this.state.name}
              onChange={this.handleInput1}
            />
            <button
              className="add-button"
              disabled={this.state.job === "" ? true : false}
              onClick={this.handlePush}
            >
              ADD
            </button>
          </div>
        </div>
        
        <div class="float-container">

<div class="float-child">
  <div class="green">
  {this.state.task.map((single, index) => {
              return (
                <div className="res">
                  {single.job}
                  <button
                    className="button1"
                    onClick={(e) => {
                      this.handleDelete(e, index);
                    }}
                  >
                    -
                  </button>
                </div>
              );
            })}
  </div>
</div>

<div class="float-child">
  <div class="blue">
        
            <span>Completed List</span>
            {this.state.task2.map((single, index) => {
              return <div className="res">{single.job1} </div>;
            })}
  </div>
</div>

</div>
            
        
      </div>
    );
  }
}
