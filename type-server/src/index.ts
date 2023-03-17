import { AppDataSource } from "./data-source"
const express = require("express");
const cors = require("cors");
const cryptoRouter = require('./routes/crypto_routes')

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express()

app.use(express.json())
app.use(cors({
    origin: '*'
}))
app.use('/', cryptoRouter)

app.listen(3006, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${3006}`);
});