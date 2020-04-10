import React from "react"

function ToDoItem() {
    return (
        <div className = "ToDoItem">
        <input type="checkbox" className = "ToDoItemInput"></input>
        <label className="ToDoItemLabel">Item 1</label>
        </div>
    )
}

export default ToDoItem