import React from "react";
import {render} from "react-dom";
import Greet from "./Greet";
import Welcome from "./Welcome";
import Message from "./Message";

function Hi(){
    return(
        <div>
            <Message />
        <Greet name="Bruce" heroName="Batman"/>
        <Greet name="Clark" heroName="Superman"/>
        <button>Action</button>
        <Greet name="Diana" heroName="Wonder Woman"/>
        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Clark" heroName="Superman"/>
        <Welcome name="Diana" heroName="Wonder Woman"/>
        </div>
    )
}

render(<Hi />, document.getElementById("app"));