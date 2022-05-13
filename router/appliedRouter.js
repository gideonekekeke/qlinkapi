const express = require('express')
const router = express.Router()
// const {upload} = require("../ImageConfig/MulterConfig")
const {postApplied} = require('../Controller/applyController')

router.post('/:id/apply', postApplied)

module.exports = router