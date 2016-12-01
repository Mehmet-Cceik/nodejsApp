const express = require("express");
const router = express.Router();


// Users Api
const Users = require("../models/users");
Users.methods(["get", "post", "put", "delete"]);
Users.register(router, "/users");

const icerik = require("../models/icerik");
icerik.methods(["get", "post", "put", "delete"]);
icerik.register(router, "/icerik");

module.exports = router;