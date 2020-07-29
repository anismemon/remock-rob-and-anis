const express = require('express');
const path = require('path');
const { response } = require('express');
const app = express()

let port = process.env.PORT || 5000

app.use(express.static(path.resolve('./client/public')))

// app.get('*', (request, response) => {
//     response.sendFile(path.resolve('./client/public/index.html'))
// })

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => {
    console.log('Listening on port: ', port)
})
