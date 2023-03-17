import { AppDataSource } from "./data-source"
import {Request, Response} from "express";
import express = require("express");
import cors = require("cors");

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

app.get("/cryptos", async function (req: Request, res: Response) {
    const cryptos = await AppDataSource.query('SELECT * FROM crypto_v2')
    res.json(cryptos)
})

app.get("/cryptos/:id", async function (req: Request, res: Response) {
    const id = req.params.id
    const oneCrypto = await AppDataSource.query(`SELECT * FROM crypto_v2 where id = ${id}`)
    res.json(oneCrypto)
})

app.post('/cryptos/create/', async function (req: Request, res: Response){
    const {code, value} = req.body
    console.log(`INSERT INTO crypto_v2 (code, value) values (${code}, ${value})`)
    const newCrypto = await AppDataSource.query(`INSERT INTO crypto_v2 (code, value) values ('${code}', '${value}')`)
    res.json(newCrypto)
})


app.put('/cryptos/update/:id', async function (req: Request, res: Response) {
    const id = req.params.id
    const {code, value} = req.body
    const updateCrypto = await AppDataSource.query(`UPDATE crypto_v2 SET code = '${code}', value = '${value}' WHERE id = '${id}'`)
    res.json(updateCrypto)
})

app.delete("/cryptos/delete/:id", async function (req: Request, res: Response) {
    const id = req.params.id
    const deleteCrypto = await AppDataSource.query(`DELETE FROM crypto_v2 where id = '${id}'`)
    res.json(deleteCrypto)
})


app.listen(3006, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${3006}`);
});