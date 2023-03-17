const Router = require('express')
const router = new Router
const useController = require('../controller/crypto_controller')

// router.get('/parse', useController.parseInfo)
router.post('/crypto/create', useController.createCrypto)
router.get('/crypto', useController.getCrypto)
router.get('/crypto/:id', useController.getOneCrypto)
router.put('/crypto/edit/:id"', useController.updateCrypto)
router.delete('/crypto/:id', useController.deleteCrypto)

module.exports = router