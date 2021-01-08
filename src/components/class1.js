import React from 'react';
import MyComp from "./mycomp"
import "../styles/styles.css"
export default class Hello extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            number1:0,
            number2:0,
            
        }
    }


   
    render()
    {
        return(
           <div className="layout">
               <div >
                  
                  <div>
                    <label>Number</label>
                    <input className="inputField"  onChange={(e)=>{this.setState({number1:e.target.value})}}/>
                     
                 </div>
                 <div>
                 <label>Number</label>      
                 <input className="inputField"   onChange={(e)=>{this.setState({number2:e.target.value})}}/>
                 </div>
                 
               </div>
                
                <div>
                <button className= "buttonField" onClick={(e)=>(alert(parseInt(this.state.number1)+parseInt(this.state.number2)))}>Add</button>
                <button className= "buttonField" onClick={(e)=>(alert(parseInt(this.state.number1)-parseInt(this.state.number2)))}>Subtract</button>
                <button className= "buttonField" onClick={(e)=>(alert(parseInt(this.state.number1)*parseInt(this.state.number2)))}>Multiplication</button>
                <button className= "buttonField" onClick={(e)=>(alert(parseInt(this.state.number1)/parseInt(this.state.number2)))}>Division</button>
                <br/>
                </div>
                <div className="note">
                    <p>
                        Note:
                              The value of the result is rendered in alert Message
                    </p>
                </div>

                
                
            </div>
        )
    }
   
}