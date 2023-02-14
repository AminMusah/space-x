const { getLaunches } = require('../contollers/launches')
const router = require('express').Router()

router.get('/', getLaunches)

module.exports = router 