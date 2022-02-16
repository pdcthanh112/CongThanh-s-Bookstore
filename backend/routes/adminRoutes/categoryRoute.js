const express = require("express");

const router = express.Router();

const categoryController = require("../../controllers/adminController/categoryController");

router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryByID);
router.post('/', categoryController.createNewCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router