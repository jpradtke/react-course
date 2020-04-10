import React from "react"

function clickSeparate(){
        console.log("Clicked in a separate function")
}

class App extends React.Component{
    render(){
        return(
            <div>
            <h1>Event handling</h1>
            <img src="https://www.fillmurray.com/200/100" alt="pic" onMouseOver = {() => console.log("Mouse Over!")} ></img>
            <br></br>
            <br></br>
            <button onClick={() => console.log("Clicked in ES 6!")} >Click me in ES</button>
            <br />
            <button onClick = {clickSeparate} >Click me as separate Function</button>
            </div>
        )
    }
}

export default App