import React from "react"
import Joke from "./Joke"
import Joke2 from "./Joke2"
import jokeInput from "./JokeData"
import JokeExternal from "./JokeExternal"

function App () {

    const jokeFilter = jokeInput.filter(
        jokeInput => jokeInput.question.length > 5
    )

    const jokeOutput = jokeFilter.map(
        jokeFilter => <JokeExternal key={jokeFilter.id} question={jokeFilter.question} punchline={jokeFilter.punchline} />
        )

    return(
        <div>

        
        <div>
        {jokeOutput}
    </div>
    <hr></hr>

    <Joke2
        question="What is the odd?"
        punchline="This is the odd!"
    />
    <hr></hr>
    <Joke
        joke={{
            question: "Frage?",
            punchline: "Punchline!"
        }}
    />
    <Joke
        joke={{
            question: "Frage?",
            punchline: ""
        }}
    />
    <Joke
        joke={{
            question: "",
            punchline: "Punchline!"
        }}
    />
    <hr></hr>
    </div>

    )
}

export default App
