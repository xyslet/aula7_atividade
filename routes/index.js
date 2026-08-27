const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("/");
});

router.get("/about", (req, res) => {
    res.send("/about");
});

router.post("/data", (req, res) => {
    res.send("/data");
});

router.get("/users", (req, res) => {
    res.send("/users");
});

router.get("/users/:userId", (req, res) => {
    const userId = req.params.userId;

    res.send(`Bem vindo ${userId}!`);
});

router.get("/signup", (req, res) => {
    res.send("/signup");
});

router.get("/signin", (req, res) => {
    res.redirect("/signup");
});

module.exports = router;