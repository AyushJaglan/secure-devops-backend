const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    const username = req.query.username;

    // ❌ Vulnerability (important for marks)
    const query = "SELECT * FROM users WHERE username = '" + username + "'";

    res.send({
        message: "User fetched",
        query: query
    });
});

module.exports = router;