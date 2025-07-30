const express = require('express');
const router = express.Router();
const { postitems, getitems } = require('../controllers/controllers.js');

router.post('/post', postitems);
router.get('/get', getitems);

module.exports = router;