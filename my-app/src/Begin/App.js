import React from "react"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import ToDoItem from "./ToDoItem"

function App () {
    return(
        <div>
            <Header />
            <hr></hr>
            <Body />
            
           
            <hr></hr>

           
            
            <hr></hr>
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <hr></hr>
            <Footer />
        </div>
    )
}


export default App