import React, {Component} from "react";

class PostList extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts:[],
            errorMsg:""
        }
    }

    async componentDidMount(){
        try{
            const url = "https://jsonpwlaceholder.typicode.com/posts";
            const response  = await fetch(url)
            const data =  await response.json();
        this.setState({
            posts:data
        })
        }
       catch{
           this.setState({
               errorMsg: "Error is getting posts"
           })
       }
    }

    render(){
        const {posts,errorMsg} = this.state;
        return(
            <div>
                <p>List of Posts</p>
        {posts.length? posts.map( post=> <div key={post.id}>{post.title}</div>):null}
        {errorMsg?<div>{errorMsg}</div>:null}
            </div>
        )
    }
}
export default PostList;