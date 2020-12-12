import React, {Component} from "react";

class Message extends Component {
    constructor(){
        super();
        this.state = {
message:"Welcome Visitor"
        }
    }

    handleClick(){
        this.setState({
            message:"Thank you for subscribing"
        })
    }
    render(){
        return (
            <div>
                
<h1>
                {this.state.message}</h1>
                <button onClick={() => this.handleClick()}>Subscribe</button>
            
            </div>
            
        )
    }
}

export default Message