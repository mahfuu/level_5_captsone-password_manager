import React, { useState } from "react"
import axios from "axios"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){
    const [cards, setCards] = useState([])

    const getCards = () => {
        axios.get("/profile")
            .then(res => setCards(res.data))
            .catch(err => console.log(err))
    }

    return(
        <ThemeContext.Provider
            value={{
                cards,
                getCards
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider, ThemeContext }