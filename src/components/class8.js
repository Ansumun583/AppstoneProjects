import React from "react";
import Alert from "@material-ui/lab/Alert";
import pic1 from "./pictures/hand-painted-watercolor-background-with-sky-clouds-shape.jpg"
import {
  Button,
  Grid,
  TextField,
  Card,
  CardContent,
  Snackbar,
  Typography
} from "@material-ui/core";
import PasswordField from "material-ui-password-field";
import Pic from "./pictures/pngwing.com.png";
import "../styles/bgStyle.css"
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: "",
      open: "",
      test:""
    };
  }
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handlePass = (e) => {
    this.setState({
      pass: e.target.value,
    });
  };
  handleClick = () => {
    fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.name,
        password: this.state.pass,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.token) {
          this.setState({
            open: true,
            test:true,
            name:"",
            pass:""
          });
        }
        else{
            this.setState({
                open: true,
                test:false,
                name:"",
                pass:""
              });
        }
      });
  };
  render() {
    return (
      <Grid
        container
        style={{
          justifyContent: "center",
          marginTop: 100,
        }}
      >
        <Card style={{
            // backgroundColor:"#f4f9f9"
            backgroundImage: `url(${pic1})`,
            Opacity:100,
            width:250
        }}>
          <CardContent>
              <Grid>
                  <Typography variant="h5">
                      Login
                  </Typography>
              </Grid>
            <Grid
              item
              style={{
                justifyContent: "center",
              }}
            >
              <img
                src={Pic}
                style={{
                  height: 100,
                  width: 100,
                  marginLeft:60
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-basic"
                label="Name"
                onChange={this.handleName}
                fullWidth="true"
                value={this.state.name}
              />
            </Grid>
            <Grid item>
              {/* <TextField id="standard-basic" label="Password" onChange={this.handlePass}/> */}
              <PasswordField
                value={this.state.pass}
                hintText="At least 8 characters"
                floatingLabelText="Enter your password"
                onChange={this.handlePass}
                style={{
                  marginTop: 20,
                }}
              />
            </Grid>
            <Grid item>
              <Button
                
                variant="contained" color="primary"
                fullWidth="true"
                onClick={this.handleClick}
                style={{
                  marginTop: 18,
                 background:"#51c2d5"
                 
                 
                
                  
                }}
                disabled={this.state.name === ""||this.state.pass === "" ? true : false}
              >
                login
              </Button>
            </Grid>
          </CardContent>
        </Card>
        <Snackbar
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          {this.state.test === true? (
            <Alert onClose={this.handleClose} severity="success">
              Login Sucessfully
            </Alert>
          ) : (
            <Alert onClose={this.handleClose} severity="error">
              Login Failed
              {console.log("hello")}
            </Alert>
          )}
        </Snackbar>
      </Grid>
    );
  }
}
