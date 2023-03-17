import {AppDataSource} from "../data-source";
import {Request, Response} from "express";
import {CryptoV2} from "../entity/CryptoV2";

class useController{

    async getCryptos(req: Request, res: Response) {
        const cryptos = await AppDataSource.getRepository(CryptoV2).find()
        res.json(cryptos)
    }

    async getOneCrypto(req: Request, res: Response) {
        const oneCrypto = await AppDataSource.getRepository(CryptoV2).findOneBy({
            id: Number(req.params.id)
        })
        res.send(oneCrypto)
    }

    async createCrypto (req: Request, res: Response){
        const newCrypto =  AppDataSource.getRepository(CryptoV2).create(req.body)
        const result = await AppDataSource.getRepository(CryptoV2).save(newCrypto)
        res.send(result)
    }

    async updateCrypto (req: Request, res: Response) {
        const oneCrypto = await AppDataSource.getRepository(CryptoV2).findOneBy({
            id: Number(req.params.id)
        })
        AppDataSource.getRepository(CryptoV2).merge(oneCrypto, req.body)
        const results = await AppDataSource.getRepository(CryptoV2).save(oneCrypto)
        res.send(results)
    }

    async deleteCrypto (req: Request, res: Response) {
        const results = await AppDataSource.getRepository(CryptoV2).delete(req.params.id)
        res.send(results)
    }
}

module.exports = new useController()