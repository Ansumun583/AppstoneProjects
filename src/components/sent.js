import React from 'react'

export default class Sent extends React.Component {
constructor(props)
{
    super(props);
    this.state={
        text1:""
    }
    
}
    render() {
        return (
            <div>
                hello
                {this.props.val}
            </div>
        )
    }
}
