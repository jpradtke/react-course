import React from "react"

function JokeExternal (props) {
    return (
    <div>
        <p>Question: {props.question}</p>
        <p>Punchline: {props.punchline}</p>
    </div>
    )
}

export default JokeExternal