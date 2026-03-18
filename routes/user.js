const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    const username = req.query.username;

    const password = "admin123";

    res.send({
        message: "User fetched",
        user: username,
        password: password
    });
});

module.exports = router;