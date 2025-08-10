const express = require('express');
const router = express.Router();
const { postitems, getitems, getCatagoriesdata } = require('../controllers/controllers.js');

router.post('/post', postitems);
router.get('/get', getitems);
router.get('/category/:category',getCatagoriesdata );
module.exports = router;