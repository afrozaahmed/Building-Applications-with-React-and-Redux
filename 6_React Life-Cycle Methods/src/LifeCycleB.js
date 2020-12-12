import React, {Component} from "react";

class LifeCycleB extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:"Afroz"
        }
        console.log("LifeCycleB constructor")
    }
static getDerivedStateFromProps(props,state){
    console.log("LifeCycleB getDerivedStateFromProps")
    return null;
}

componentDidMount(){
    console.log("LifeCycleB componentDidMount");
}

shouldComponentUpdate(){
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
}

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("LifeCycleB getSnapshotBeforeUpdate")
    return null;
}

componentDidUpdate(){
console.log("LifeCycleB componentDidUpdate")
}
    render(){
        console.log("LifeCycleB render")
        return (
            <h1>LifeCycleB</h1>
        )
    }
}

export default LifeCycleB;

