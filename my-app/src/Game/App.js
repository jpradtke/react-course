import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    render(){
        return(
            <div className = "gameDiv">
                <h1>{this.state.count}</h1>
                <button className = "gameButton">Count</button>
            </div>

        )
    }
}

export default App