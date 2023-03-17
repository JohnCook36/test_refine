import { Router } from 'express'
const useController = require('../controller/crypto_controller')

const router = new Router


router.post('/crypto/create', useController.createCrypto)
router.get('/crypto', useController.getCrypto)
router.get('/crypto/:id', useController.getOneCrypto)
router.put('/crypto/edit/:id"', useController.updateCrypto)
router.delete('/crypto/:id', useController.deleteCrypto)