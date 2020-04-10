import React from "react"
import Header from "./Header"
import Greeting from "./Greeting"
import States from "./States"
import StatesPractice from "./StatesPractice"




class App extends React.Component {
    render(){
        return (
            <div>
                <Header username = "Jan" />
                <Greeting />
                <States />
                <StatesPractice />
            </div>
        )
    }
    
}



export default App