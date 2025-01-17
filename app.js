const express = require("express")
const app = express()
const port = 3000;

app.use(express.static("public"))

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + "/views/about.html")
})

app.get('/career', (req, res, next) => {
    res.sendFile(__dirname + "/views/career.html")
})

app.get("/galery", (req, res , next) => {

    res.sendFile(__dirname + "/views/galery.html")
})

app.get('*', (req, res, next) => {
    res.sendFile(__dirname + "/views/404.html")
})





app.listen(port, () => {
    console.log(`El server esta funcionando el el puerto ${port}`)
})
