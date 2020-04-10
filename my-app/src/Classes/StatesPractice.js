import React from "react"

class StatesPractice extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }

    }
    render(){
        return(
           <div>
               <h3>You are currently logged {this.state.isLoggedIn ?  "in" : "out"} </h3>
           </div>
        )
    }
}

export default StatesPractice