import React from "react";
import Alert from "@material-ui/lab/Alert";
import pic1 from "./pictures/hand-painted-watercolor-background-with-sky-clouds-shape.jpg";
import {
  Button,
  Grid,
  TextField,
  Card,
  CardContent,
  Snackbar,
  Typography,
  Dialog,
  CircularProgress,
  DialogContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import PasswordField from "material-ui-password-field";
import Pic from "./pictures/pngwing.com.png";
import "../styles/bgStyle.css";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false,
      data: "",
    };
  }

  handleClick = () => {
    this.setState({
      test: true,
    });
    fetch("https://reqres.in/api/users?delay=3")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        this.setState({
          test: false,
          data: response.data,
        });
      });
  };
  render() {
    return (
      <div>
        <Grid container>
          <Grid container  style={{
          justifyContent: "center",
          marginTop: 10,
          marginBottom:25
        }}>
           
                <Button onClick={this.handleClick} fullWidth="true" variant="outlined" color="secondary" style={{marginLeft:10,marginRight:10}}>
                Fetch DAta
                </Button>
                <Dialog open={this.state.test}>
                  <DialogContent>
                      <CircularProgress style={{justifyContent:"center"}}/>
                  </DialogContent>
              </Dialog>
             
          </Grid>
          <Grid container>
            {this.state.data &&
              this.state.data.map((single, index) => {
                return (
                  <div>
                    <Card style={{ margin: 15 }}>
                      <CardContent>
                        <img
                          src={single.avatar}
                          style={{ borderRadius: 100, marginLeft: 34 }}
                        />

                        <Typography gutterBottom variant="h8" component="h2">
                          {single.first_name} {single.last_name}
                        </Typography>
                        <Typography>E-mail: {single.email}</Typography> <br/>
                        <Typography>ID: {single.id}</Typography>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
          </Grid>
        </Grid>
      </div>
    );
  }
}
