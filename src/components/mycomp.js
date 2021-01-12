import React from "react"

export default class MyComp extends React.Component{
    constructor(props)
    {
        super(props); 
        this.state={
            sum:0,
            sub:0,
            mul:0,
            div:0
        }
    }
    handleAdd= (e) =>{
        /*alert(parseInt(this.props.val)+parseInt(this.props.val1))*/
        this.setState(
            {
                sum:parseInt(this.props.val)+parseInt(this.props.val1)
            }
        )
        

    }
    handleSub= (e) =>{
        alert(parseInt(this.props.val)-parseInt(this.props.val1))
        
        
        

    }
    handleMul= (e) =>{
        alert(parseInt(this.props.val)*parseInt(this.props.val1))

    }
    handleDiv= (e) =>{
        alert(parseInt(this.props.val)/parseInt(this.props.val1))


    }
    render()
    {
        return(
            <div>
               
                <div>
                <button className= "buttonField" onClick={this.handleAdd}>Add</button>
                <button className= "buttonField" onClick={this.handleSub}>Subtract</button>
                <button className= "buttonField" onClick={this.handleMul}>Multiplication</button>
                <button className= "buttonField" onClick={this.handleDiv}>Division</button>
                <br/>
                </div>
                <div className="note">
                 result : {this.state.sum}
                </div>
            </div>
        )
    }
}