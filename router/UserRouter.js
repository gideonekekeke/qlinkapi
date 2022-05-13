const express = require('express')
const router = express.Router()
const {upload} = require("../ImageConfig/MulterConfig")
const {RegisterClient, RegisterDeveloper, getAlll, getOne, EditProfile, LoginUser} = require('../Controller/UserController')

router.post("/developerReg", upload, RegisterDeveloper)
router.route('/clientReg', upload).post(RegisterClient)
router.route('/login').post(LoginUser)
router.get('/', getAlll)
router.get('/:id', getOne)
router.patch('/editprofile/:id',upload, EditProfile )





module.exports = router