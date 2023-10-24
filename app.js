const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000

app.get("/", (req, res) => {
    const quotes = [
        {
            id: 1,
            text: "I can feel depression all around",
        },
        {
            id: 2,
            text: "This twisted tortured mess",
        },
        {
            id: 3,
            text: "Take second best put me to the test",
        },
        {
            id: 4,
            text: "Is simplicity best or simply the easiest?",
        },
        {
            id: 5,
            text: "It all seems so stupid it makes me want to give up, but why should I give up when it all seems so stupid?",
        },
        {
            id: 6,
            text: "Trying to sell the story of love's eternal glory",
        },
        {
            id: 7,
            text: "Your optimistic eyes seem like paradise to someone like me",
        },
        {
            id: 8,
            text: "I dont' advice and I don't criticise",
        },
        {
            id: 9,
            text: "Your pretty dress is oilstained, from working too hard for too little",
        },
        {
            id: 10,
            text: "Nothing comes easy, it never will",
        }

    ]
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    })
    res.json(quotes)
})

app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}/`))