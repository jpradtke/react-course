import React from "react"

function Joke(props){
if (props.joke.question === "" || props.joke.question === null ) {
    return (
        <div>
            <p>Here is your punchline: {props.joke.punchline}, but please also deliver a question. </p>
        </div>
    )
} else if(props.joke.punchline === "" || props.joke.punchline === null) {
    return (
        <div>
            <p>Here is your question: {props.joke.question}, but please also deliver a punchline. </p>
        </div>
    )
    
} else {
    return(
        <div>
            <p>This is a question: {props.joke.question} and this is the punchline: {props.joke.punchline} </p>
        </div>
    )
}
    

}

export default Joke