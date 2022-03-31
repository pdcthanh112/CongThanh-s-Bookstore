const express = require('express')

const router = express.Router();

const bookController = require('../../controllers/userController/bookController');

router.get('/', bookController.getAllBooks);

router.get('/:id', bookController.getBookByID);

module.exports = router;