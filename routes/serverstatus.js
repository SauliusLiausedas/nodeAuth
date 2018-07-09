const express = require('express')
const router = express.Router()

router.get('/errorcount', function(req, res) {
	res.send({errorCount: 0})
})

module.exports = router;