import React from "react"

class ToDoItem extends React.Component{
    render(){
        return(
        <div className = "ToDoItem">
        <input type="checkbox" className = "ToDoItemInput" checked = {this.props.completed}></input>
        <label className="ToDoItemLabel">{this.props.text}</label>
        </div>
        )
    }
}

export default ToDoItem