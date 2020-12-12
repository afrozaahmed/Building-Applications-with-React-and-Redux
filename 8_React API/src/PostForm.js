import React, {Component} from "react";

class PostForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            userId:"",
            title:"",
            body:""
        }
    }

    changeHandler = e =>{
this.setState({
    [e.target.name]:e.target.value
})
    }

    submitHandler = e =>{
        e.preventDefault();
        const request = {
            method:"post",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(this.state)
        }
        fetch('https://jsonplaceholder.typicode.com/posts', request)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render(){
        const {userId, title, body} = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <input type="text" name="userId" value={userId} placeholder="userId" onChange={this.changeHandler}/>
                    <input type="text" name="title" value={title} placeholder="title" onChange={this.changeHandler}/>
                    <input type="text" name="body" value={body} placeholder="body"onChange={this.changeHandler} />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm;