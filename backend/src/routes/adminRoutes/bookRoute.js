const express = require('express')

const router = express.Router();

const bookController = require('../../controllers/adminController/bookController');

router.get('/', bookController.getAllBooks);

router.get('/:id', bookController.getBookByID);

router.post('/', bookController.createNewBook);

router.put('/:id', bookController.updateBook);

router.delete('/:id', bookController.deleteBook);

module.exports = router;