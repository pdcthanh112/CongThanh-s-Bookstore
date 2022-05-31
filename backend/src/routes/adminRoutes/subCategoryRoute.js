const express = require('express');

const router = express.Router();

const subCategoryController = require('../../controllers/adminController/subCategoryController');

router.get('/', subCategoryController.getAllSubCategories);

router.get('/:id', subCategoryController.getSubCategoryByID);

router.get('/getByCategory/:id', subCategoryController.getSubCategoryByCategoryID);

router.post('/', subCategoryController.createNewSubCategory);

router.put('/:id', subCategoryController.updateSubCategory);

router.delete('/:id', subCategoryController.deleteSubCategory);

module.exports = router;