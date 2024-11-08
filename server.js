const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

const port = 3000

app.listen(process.env.PORT || port, () => {
    console.log(`Web server is listening on port ${process.env.PORT || port}`)
})