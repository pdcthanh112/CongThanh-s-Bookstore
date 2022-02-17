const SubCategoryModel = require('../../models/subCategoryModel')

exports.getAllSubCategories = (req, res) => {
    SubCategoryModel.getAllSubCategories((err, subCate) => {
        if (err) res.send(err);
        res.send(subCate);
    });
};

exports.getSubCategoryByID = (req, res) => {
    SubCategoryModel.getSubCategoryByID(req.params.id, (err, subCate) => {
        if (err) res.send(err);
        res.send(subCate);
    });
};

exports.createNewSubCategory = (req, res) => {
    const subCateReqData = new SubCategoryModel(req.body)
    if (req.body.contrustor == Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        SubCategoryModel.createSubCategory(subCateReqData, (err, subCate) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'subCategory created succesfully', data: subCate.insertId })
        })
    }
};

exports.updateSubCategory = (req, res) => {
    const subCateReqData = new SubCategoryModel(req.body)
    if (req.body.contrustor == Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
        CategoryModel.updateSubCategory(req.params.id, subCateReqData, (err, subCate) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Sub-Category updated succesfully' })
        })
    }
};

exports.deleteSubCategory = (req, res) => {
    SubCategoryModel.deleteSubCategory(req.params.id, (err, subCate) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'Sub-Category deleted succesfully!' })
    })
};
