import React from "react"
import ToDoItem from "./ToDoItem"
import ToDosData from "./ToDosData"



class App extends React.Component{
    constructor(){
        super()
        this.state = ToDosData
    }
    render(){
        const ToDoItems = this.state.map(item => <ToDoItem text={item.text} completed = {item.completed} />)
        return(
            <div>
            <h3>This is the ToDoApp</h3>
            {ToDoItems}
            </div>
        )
    }
}

export default App