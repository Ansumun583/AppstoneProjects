import React from 'react';
import Sent from "../components/sent"

export default class class5 extends React.Component {
constructor(props)
{
    super(props);
    this.state={
        text:""
    }
}
handleText=(e)=>{
    this.setState({
        text:e.target.value
    })
}
handleClick=()=>
{ 
    

}
 componentDidUpdate(ps,cs)
 {
     if(this.cs===this.ps)
      <Sent val={cs}/>
 }
    render() {
        return (
            <div>
                <input onChange={this.handleText}/>
                {this.state.text}
                <button onClick={this.handleClick}>click</button>
                <Sent/>
            </div>
        )
    }
}
