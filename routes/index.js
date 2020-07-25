const express = require('express');
const router = express.Router();
const userController = require('../controller/users');
const child = require("../controllers/child.js");
const district = require("../controllers/district.js");
const state = require("../controllers/state.js");

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.post("/child", child.create);

router.get("/child", child.findAll);

router.post("/state", state.create);

router.get("/state", state.findAll);

router.post("/district", district.create);

router.get("/district", district.findAll);


module.exports = router;