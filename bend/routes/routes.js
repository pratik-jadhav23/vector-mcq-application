const express = require('express')
const { addAssesment, getAssesment, evaluate } = require('../controllers/assesmentController')

const router = new express.Router()

router.post('/add',addAssesment)
router.post('/get',getAssesment)
router.post('/evaluate', evaluate)
 
module.exports = router