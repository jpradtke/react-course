import React from "react"

class States extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "Jan",
            age: 31
        }
    }
    
    render(){
        return (
        <div>
            <h1>{this.state.name}</h1>
            <h3>{this.state.age} years old</h3>
        </div>
    ) 
    }
       
}

export default States