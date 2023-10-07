const express = require('express')
const app = express()
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

    res.json(quotes)
})

app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}/`))