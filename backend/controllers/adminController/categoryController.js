const CategoryModel = require('../../models/categoryModel')

exports.getAllCategories = (req, res) => {
    CategoryModel.getAllCategories((err, categories) => {
        if (err) res.send(err);
        res.send(categories);
    });
};

exports.getCategoryByID = (req, res) => {
    CategoryModel.getCategoryByID(req.params.id, (err, category) => {
        if (err) res.send(err);
        res.send(category);
    });
};

exports.createNewCategory = (req, res) => {
    const categoryReqData = new CategoryModel(req.body)
    if (req.body.contrustor == Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        CategoryModel.createCategory(categoryReqData, (err, category) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Category created succesfully', data: category.insertId })
        })
    }
};

exports.updateCategory = (req, res) => {
    const categoryReqData = new CategoryModel(req.body)
    if (req.body.contrustor == Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
        CategoryModel.updateCategory(req.params.id, categoryReqData, (err, category) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Category updated succesfully' })
        })
    }
};

exports.deleteCategory = (req, res) => {
    CategoryModel.deleteCategory(req.params.id, (err, category) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'Category deleted succesfully!' })
    })
};
