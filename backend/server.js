const express = require(`express`)
const app = express()

const PORT = 5000
const cors = require(`cors`)
app.use(express.static(__dirname))
const bodyParser = require("body-parser")
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const menuRoute = require(`./routes/menu-route`)

app.use(menuRoute)

app.listen(PORT, () => {
    console.log(`Server is running...`)
})