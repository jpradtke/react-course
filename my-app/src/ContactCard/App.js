import React from "react"
import ContactCard from "./ContactCard"

function App () {
    return (
        <div>
            <ContactCard
                contact={{
                    name: "Jan Peter Radtke",
                    imgURL: "https://api-magazin.single.de/uploads/media/blog/0001/01/thumb_423_blog_big.jpeg",
                    phone: "+49 160 992 41 934",
                    email: "jan.peter.radtke@googlemail.com"
                }}
            />
        </div>
    )
}

export default App