import React from 'react';
import "../styles/styles2.css"
export default class Mapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [
                {
                    name: " Ansumun ",
                    role: "React JS"
                },

                {
                    name: "Soumya",
                    role: "Node JS"
                },
                {
                    name: "Sambit",
                    role: "Angular JS"
                }
            ]
        }
    }

    handleInput1 = (e) => {
        this.setState({
            name: e.target.value,

        })
    }

    handleInput2 = (e) => {
        this.setState({
            role: e.target.value,
        })
    }

    handlePush = () => {
        var temp = this.state.arr;
        temp.push({
            name: this.state.name,
            role: this.state.codes
        })
        this.setState({
            arr: temp,
            name: "",
            role: ""
        })

    }

   

    handleDelete = (e, index) => {
        var temp=this.state.arr
        temp.splice(index,1)
        this.setState({
            arr:temp
        })

    }



    render() {
        return (
            <div className = "layout">
              
                {this.state.arr.map((single, index) => {
                    return (
                        <div className = "res">
                            {single.name} Domain {single.role}<button className = "button1"  onClick={(e) => {
                                        this.handleDelete(e, index)
                                    }}>-</button>
                                
                        </div>
                    )
                })}
                 <div>
                     <div className = "button">
                     <input  placeholder="Enter The name"  className = "inputField" value={this.state.name} onChange={this.handleInput1} />
                <input  className = "inputField" placeholder="Enter the Domain" value={this.state.Domain} onChange={this.handleInput2} />
                <button className = "add-button" disabled={this.state.name === ""?true:false} onClick={this.handlePush}>
                    ADD
                </button>
                     </div>
               
                 </div>
               
                



            </div>
        )
    }
}