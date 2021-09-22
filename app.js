const express = require('express')
const app = express()
const PORT = process.env.PORT || 8082
//const http = require('http')

//const server = http.createServer()


app.use(express.static("public"))


app.get('/', (req, res) => {
    res.send("<h2>Pamodoro</h2>")

})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})

