const express = require('express')
const router = express.Router()
const {PostJobs, EditJob, getSingleJob} = require('../Controller/JobController')

router.post('/:id/jobposting', PostJobs)
router.patch('/:id/:id/jobedit', EditJob)
router.get('/:id/:id/singlejob', getSingleJob)


module.exports = router