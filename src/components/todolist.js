import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import UndoIcon from '@material-ui/icons/Undo';
import { green,red } from '@material-ui/core/colors'
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
  handleUndo=(e,index)=>{
    var temp = this.state.task1;
    var ele = temp.splice(index, 1);
    console.log(ele[0]);
    var temp2 = this.state.task;
    temp2.push(ele[0]);
    this.setState({
      task: temp2,
      task2: temp,
    });

  }
  render() {
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <TextField
            id="standard-basic"
            label="Task"
            onChange={this.handleChange}
            value={this.state.item}     

          />
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handlePush}
            disabled={this.state.item===""?true:false}
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
                   padding:18,
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
                                    {single} <Button style={{margin:0,padding:2}}color="primary" variant="text" size="small" onClick={(e) => {
                                        this.handleDelete(e, index, single)
                                    }}><HighlightOffIcon  style={{ color: red[500] }}/></Button>
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
                    padding: 18,
                    borderRadius: 10,
                    width: 200,
                    justifyContent: "center",
                    alignItems: "center",
                    display: 'flexbox'
                }}>
                    <ul style={{
                        padding: 4,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        display: 'flexbox'
                    }}>
                        {this.state.task1.map((single, index) => {
                            return (
                                <li>
                                  <strike>{single}</strike><Button color="primary" variant="text" size="small" onClick={(e) => {
                                        this.handleUndo(e, index, single)
                                    }}><UndoIcon fontSize="small"style={{ color: green[500] }}/></Button> 
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
