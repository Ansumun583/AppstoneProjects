import React from 'react'
import { Button, Grid, TextField } from "@material-ui/core";
export default class ColorChange extends React.Component {


   


constructor(props)
{
    super(props);
    this.state={
        color:[],
        val:true
    }
}


componentDidUpdate(e){
    console.log("hello")
    fetch("https://reqres.in/api/users?page=2").then((res)=>(res.json())).then((response)=>(
        
       console.log(response.data)
     ))
    
}

handleColor=()=>
{
    this.setState({
        val:!this.state.val
    })
}
render(){
    return(
        <div>
            <Button onClick={this.handleColor}>color</Button>
            {this.state.color}
        </div>

    )
}
}
