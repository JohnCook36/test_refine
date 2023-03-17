import { AppDataSource } from "./data-source"
import {Request, Response} from "express";
import express = require("express");
import cors = require("cors");
import {CryptoV2} from "./entity/CryptoV2";

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
    const cryptos = await AppDataSource.getRepository(CryptoV2).find()
    res.json(cryptos)
})

app.get("/cryptos/:id", async function (req: Request, res: Response) {
    const oneCrypto = await AppDataSource.getRepository(CryptoV2).findOneBy({
        id: Number(req.params.id)
    })
    res.send(oneCrypto)
})

app.post('/cryptos/create', async function (req: Request, res: Response){
    const newCrypto =  AppDataSource.getRepository(CryptoV2).create(req.body)
    const result = await AppDataSource.getRepository(CryptoV2).save(newCrypto)
    res.send(result)
})

app.put('/cryptos/update/:id', async function (req: Request, res: Response) {
    const oneCrypto = await AppDataSource.getRepository(CryptoV2).findOneBy({
        id: Number(req.params.id)
    })
    AppDataSource.getRepository(CryptoV2).merge(oneCrypto, req.body)
    const results = await AppDataSource.getRepository(CryptoV2).save(oneCrypto)
    res.send(results)
})

app.delete("/cryptos/delete/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(CryptoV2).delete(req.params.id)
    res.send(results)
})


app.listen(3006, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${3006}`);
});