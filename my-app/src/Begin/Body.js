import React from "react"

const firstName = "Jan";
const lastName = "Radtke";

function Body(){

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning";
    } else if (hours > 12 && hours < 17) {
        timeOfDay = "afternoon";
    } else {
        timeOfDay = "night";
    }

    return (
        <div>
    <h2 className="body">Good {timeOfDay}, {`${firstName} ${lastName}`}</h2>
    <h2 className="body">Good {timeOfDay}, {firstName + " " + lastName}</h2>
    </div>
    )
}

export default Body