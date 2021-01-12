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
                    <input className="inputField" placeholder="Enter the number"  onChange={(e)=>{this.setState({number1:e.target.value})}}/>
                     
                 </div>
                 <div>
                 <label>Number</label>      
                 <input className="inputField"placeholder="Enter the number"   onChange={(e)=>{this.setState({number2:e.target.value})}}/>
                 </div>
                 
               </div>
               <MyComp val={this.state.number1} val1={this.state.number2}/>
                <div className="note">
                    <p className="fonts">
                        Note:
                              The value of the result is rendered in alert Message
                    </p>
                </div>

                
               
            </div>
        )
    }
   
}