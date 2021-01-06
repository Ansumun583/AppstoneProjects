import React from "react"

export default class MyComp extends React.Component{
    render()
    {
        return(
            <div>
                hello From my components created
                {this.props.val.message2}
            </div>
        )
    }
}