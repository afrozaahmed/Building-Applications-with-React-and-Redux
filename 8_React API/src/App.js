import React from "react";
import {render} from "react-dom";
import PostForm from "./PostForm";
import PostList from "./PostList";

function App(){
    return(
        <div>
            <PostForm />
            {/*<PostList />*/}
        </div>
    )
}

render(<App />, document.getElementById("app"));