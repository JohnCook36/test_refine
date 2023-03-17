// const axios = require('axios')
const db = require('../db')

class useController{

    async createCrypto(req, res) {
        const {code, persentage} = req.body

        const newCrypto = await db.query(`INSERT INTO crypto (code, persentage) values ($1, $2)`, [code, persentage])

        await db.query(
            `INSERT INTO crypto (code, persentage) values ${values}`
        )
        res.send(newCrypto.rows)
    }

    // async parseInfo(req, res) {
    //    let data = await axios.get('https://api.coingecko.com/api/v3/global')
    //
    //     await db.query(
    //         `DELETE FROM crypto`,
    //     )
    //
    //     let values = Object.entries(data.data.data.total_market_cap).map(([key, value]) => `('${key}', '${value}')`).join(',')
    //
    //     await db.query(
    //         `INSERT INTO crypto (code, persentage) values ${values}`
    //     )
    //     res.send('Ok')
    // }

    async getCrypto(req, res) {
        await db.query(`SELECT * FROM crypto`, (error, rows) => {
            res.send(rows)
        })
    }

    async getOneCrypto(req, res) {
        const id = await req.params.id
        const quarty = await db.query(`SELECT * FROM crypto where id = $1`, [id])
        res.send(quarty.rows)
    }

    async updateCrypto(req, res) {
        const {id, code, persentage} = req.body
        const quarty = await db.query(`UPDATE crypto set code = $1, persentage = $2 where id = $3 RETURNING *`, [code, persentage, id])
        res.send(quarty.rows)
    }

    async deleteCrypto(req, res) {
        const id = await req.params.id
        const quarty = await db.query(`DELETE FROM crypto where id = $1`, [id])
        res.send(quarty.rows)
    }
}

module.exports = new useController()


