const {Router} = require('express')
const router = Router()
const primCtrl = require('../controllers/prim.Controller')

router.get('/ejemplo', primCtrl.ejemplo)

module.exports = router