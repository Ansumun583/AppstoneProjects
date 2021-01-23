import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import Container from "@material-ui/core/Container";
export default class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ["Clean dishes"],
      task1: [],
      item: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleDelete = (e, index) => {
    var temp = this.state.task;
    var ele = temp.splice(index, 1);
    console.log(ele[0]);
    var temp2 = this.state.task1;
    temp2.push(ele[0]);
    this.setState({
      task2: temp2,
      task: temp,
    });
  };
  handlePush = () => {
    var temp = this.state.task;
    temp.push(this.state.item);
    this.setState({
      task: temp,
      item: "",
    });
  };
  render() {
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <TextField
            id="standard-basic"
            label="Task"
            onChange={this.handleChange}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handlePush}
            style={{
                margin: 20,
                justifyContent: "center"
            }}
            
            
          >
            Add
          </Button>
        </Grid>

        <Grid
          container
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
            <Grid>
            {this.state.task.length === 0 ?
                    <h2>No Tasks</h2> :
                    <h2>Tasks pending</h2>}
                <div style={{
                    backgroundColor: "#f2f2f2",
                   padding:4,
                    borderRadius: 10,
                    width: 200,
                    justifyContent: "center",
                    alignItems: "center",
                    display: 'flexbox',
                   
                    
                }}>
                    <ul style={{
                        padding: 4,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        display: 'flexbox'
                    }}>
                        {this.state.task.map((single, index) => {
                            return (
                                <li>
                                    {single}<br/><Button color="primary" variant="contained" size="small" onClick={(e) => {
                                        this.handleDelete(e, index, single)
                                    }}>Completed</Button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Grid>

                <Grid>
                {this.state.task1.length === 0 ?
                    <h2>Tasks Pending</h2> :
                    <h2>Tasks Completed</h2>}
                <div style={{
                    backgroundColor: "#f2f2f2",
                    padding: 20,
                    borderRadius: 10,
                    width: 200,
                    justifyContent: "center",
                    alignItems: "center",
                    display: 'flexbox'
                }}>
                    <ul style={{
                        padding: 20,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        display: 'flexbox'
                    }}>
                        {this.state.task1.map((single, index) => {
                            return (
                                <li>
                                  <strike>{single}<br/></strike>  
                                </li>
                            )
                        })}
                    </ul>
                </div>
                </Grid>

        </Grid>
      </div>
    );
  }
}
