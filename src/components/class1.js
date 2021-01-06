import React from 'react';
import MyComp from "./mycomp"
var a=10;
export default class Hello extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            message1:44,
            message2:" Happy new year",
            a:5,
            name:''
        }
    }
    render()
    {
        return(
           <div>
                hello world
                {a}
                <input value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
                <h1>hello {this.state.name}</h1>
                <button onClick={(e)=>console.log(e)}>submit</button>
                <br/>
                <MyComp val={this.state}/>

            </div>
        )
    }
   
}