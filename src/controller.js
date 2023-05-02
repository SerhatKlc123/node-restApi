const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.send({
        "username":"Admin",
        "password": "admin01"
    });

});


module.exports = router;
