const dbConn = require("../config/dbConfig");

var SubCategory = function (subCategory) {
    this.id = subCategory.id;
    this.sub_category_name = subCategory.sub_category_name;
    this.category = subCategory.category;
};

SubCategory.getAllSubCategories = (result) => {
    dbConn.query("SELECT * FROM sub_category", (err, res) => {
        if (err) {
            console.log("Error while fetching subcategory", err);
            result(null, err);
        } else {
            console.log("Category fetching successfully");
            result(null, res);
        }
    });
};

SubCategory.getSubCategoryByID = (id, result) => {
    dbConn.query("SELECT * FROM sub_category WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("Error while fetching subcategory by ID", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

SubCategory.getSubCategoryByCategoryID = (id, result) => {
    dbConn.query('SELECT * FROM sub_category WHERE category = ?', id, (err, res) => {
        if (err) {
            console.log("Error while fetching subcategory by ID", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

SubCategory.createSubCategory = (subCategoryReqData, result) => {
    dbConn.query("INSERT into sub_category SET ?", subCategoryReqData, (err, res) => {
        if (err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log("Category created successfully");
            result(null, res);
        }
    });
};

SubCategory.updateCategory = (id, subCategoryReqData, result) => {
    dbConn.query('UPDATE sub_category SET sub_category_name = ?, category = ? WHERE = ?', [subCategoryReqData.sub_category_name, subCategoryReqData.category, id], (err, res) => {
        if (err) {
            console.log('Error while updating the category')
            result(null, err)
        } else {
            console.log('Update category successfully');
            result(null, res)
        }
    });
}

SubCategory.deleteSubCategory = (id, result) => {
    dbConn.query('DELETE FROM sub_category WHERE id = ?', [id], (err, res) => {
        if (err) {
            console.log('Error while deleting the category');
            result(null, err)
        } else {
            result(null, res)
        }
    });
}

module.exports = SubCategory;
