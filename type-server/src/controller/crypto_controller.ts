import {AppDataSource} from "../data-source";
import {Request} from "express";

class useController{

    async createCrypto(req, res) {
        const {code, persentage} = req.body

        const newCrypto = await AppDataSource.query(`INSERT INTO crypto (code, persentage) values ($1, $2)`, [code, persentage])

        await AppDataSource.query(
            `INSERT INTO crypto (code, persentage) values ${newCrypto}`
        )
        res.send(newCrypto.rows)
    }

    async getCrypto(req, res) {
        let all = await AppDataSource.query(`SELECT * FROM crypto`)
        res.send(all)
    }

    async getOneCrypto(req, res) {
        const id = await req.params.id
        const quarty = await AppDataSource.query(`SELECT * FROM crypto where id = $1`, [id])
        res.send(quarty.rows)
    }

    async updateCrypto(req, res) {
        const {id, code, persentage} = req.body
        const quarty = await AppDataSource.query(`UPDATE crypto set code = $1, persentage = $2 where id = $3 RETURNING *`, [code, persentage, id])
        res.send(quarty.rows)
    }

    async deleteCrypto(req, res) {
        const id = await req.params.id
        const quarty = await AppDataSource.query(`DELETE FROM crypto where id = $1`, [id])
        res.send(quarty.rows)
    }
}

