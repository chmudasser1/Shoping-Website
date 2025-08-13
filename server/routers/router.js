const express = require('express');
const router = express.Router();
const { postitems, getitems, getCatagoriesdata,getItemById } = require('../controllers/controllers.js');

router.post('/post', postitems);
router.get('/get', getitems);
router.get('/category/:category',getCatagoriesdata );
router.get('/item/:id', getItemById);

module.exports = router;