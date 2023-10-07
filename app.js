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
    ]
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    })
    res.json(quotes)
})

app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}/`))