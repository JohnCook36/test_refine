const Router = require('express')
const router = new Router
const useController = require('../controller/crypto_controller')

router.get(`/cryptos`, useController.getCryptos)
router.get(`/cryptos/:id`, useController.getOneCrypto)
router.post('/cryptos', useController.createCrypto)
router.patch('/cryptos/:id', useController.updateCrypto)
router.delete('/cryptos/:id', useController.deleteCrypto)

module.exports = router