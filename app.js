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
            text: "I don't advice and I don't criticise",
        },
        {
            id: 9,
            text: "Your pretty dress is oilstained, from working too hard for too little",
        },
        {
            id: 10,
            text: "Nothing comes easy, it never will",
        },
        {
            id: 11,
            text: "There's something wrong with me chemically, something wrong with me inherently, the wrong mix in the wrong genes",
        },
        {
            id: 12,
            text: "Life is full of surprises, it advertises nothing",
        },
        {
            id: 13,
            text: "Celebrate the fact that we've seen the back of another black day",
        },
        {
            id: 14,
            text: "Let me hear you make decisions without your television",
        },
        {
            id: 15,
            text: "You better learn your lesson well; hide what you have to hide",
        },
        {
            id: 16,
            text: "A place to hide the tears that you cried",
        },
        {
            id: 17,
            text: "Death is everywhere",
        },
        {
            id: 18,
            text: "Vows are spoken to be broken",
        },
        {
            id: 19,
            text: "See the stars, they're shining bright, everything's allright tonight",
        },
        {
            id: 20,
            text: "I'll meet you by the river, or maybe on the other side",
        },
        {
            id: 21,
            text: "You've got to work hard if you want anything at all",
        },
        {
            id: 22,
            text: "Open the window and out go ideals",
        },
        {
            id: 23,
            text: "Show some humility,  you have the ability",
        },
        {
            id: 24,
            text: "Don't waste your energy, making apologies",
        },
        {
            id: 25,
            text: "Take one more look at what you found old, and in it you'll find something new",
        },
        {
            id: 26,
            text: "I'm shying from the light, I've always loved the night, and now you offer me eternal darkness",
        },
        {
            id: 27,
            text: "Lead me into your darkness, when this world is trying its hardest to leave me unimpressed",
        },
        {
            id: 28,
            text: "Why do you smile the smile you do?",
        },
        {
            id: 29,
            text: "Everybody's looking for a reason to live",
        },
        {
            id: 30,
            text: "Give me something to get excited about",
        }

    ]
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    })
    res.json(quotes)
})

app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}/`))