const express = require("express");
const router = express.Router();
const http = require("http");
router.get("/admin", function (req, res) {
    res.sendfile("aanasayfa.html");
});
router.get("/adminLogin", function (req, res) {
    res.sendfile("login.html");
});

router.get("/icerik", function (req, res) {
    res.sendfile("icerikListe.html");
});
router.get("/icerikEkle", function (req, res) {
    res.sendfile("icerikEkle.html");
});

module.exports = router;