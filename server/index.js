const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8080;
// const cryptoRouter = require('./routes/crypto_routes')

app.use(cors({
    origin: '*'
}))
app.use(express.json())
// app.use('/', cryptoRouter)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})