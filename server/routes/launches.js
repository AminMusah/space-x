const { getLaunches,getFlightNumber, getMission, getRocket } = require('../contollers/launches')
const router = require('express').Router()

router.get('/', getLaunches)
router.get('/flight/:flightNumber', getFlightNumber);
router.get('/mission/:missionId', getMission);
router.get('/rocket/:rocketId', getRocket);

module.exports = router 