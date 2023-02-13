const { getShips } = require('../contollers/ships')
const router = require('express').Router()

router.get('/', getShips)

module.exports = router 