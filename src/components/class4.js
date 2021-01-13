import React from "react";
import MyComp from "./mycomp";
import "../styles/styles.css";
export default class Class4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNames: [
        { name:"", role:""},
        
      ],
      nameValue:"",
      roleValue:""
    };
  }
  //   handleInput=(e)=>{
  //       this.setState({

  //       })

  //   }
  handleInput1=(e)=>{
      this.setState({
          nameValue:e.target.value
      })

  }
  handleInput2=(e)=>{
    this.setState({
        roleValue:e.target.value
    })

}
handleClick=()=>
{
    var temp=this.state.listNames
    temp.push(
        {
            name:this.state.nameValue,
            role:this.state.roleValue
        }
    );
    this.setState({
        listNames:temp
    })
}
handleit=(index)=>{
    this.state.listNames.splice(index,1)
}

  render() {
    return (
      <div>
        <div>
          {this.state.listNames.map((single, index) => {
            return (
              <div>
                {single.name} {single.role}
                 <button onClick={(e)=>{
                     this.handleit(index)
                 }}>del</button>
              </div>
            );
          })}
        </div>
        <div>
            <div>
            <input onChange={this.handleInput1}/>
            <input onChange={this.handleInput2}/>
            </div>
            <div>
                <button onClick={this.handleClick}>
                    add
                </button>
            </div>
            
        </div>
        {this.state.nameValue}
        {this.state.roleValue}
      </div>
    );
  }
}
