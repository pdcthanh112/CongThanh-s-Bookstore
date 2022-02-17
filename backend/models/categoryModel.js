const dbConn = require("../config/dbConfig");

var Category = function (category) {
    this.id = category.id;
    this.category_name = category.category_name;
};

Category.getAllCategories = (result) => {
    dbConn.query("SELECT * FROM category", (err, res) => {
        if (err) {
            console.log("Error while fetching category", err);
            result(null, err);
        } else {
            console.log("Category fetching successfully");
            result(null, res);
        }
    });
};

Category.getCategoryByID = (id, result) => {
    dbConn.query("SELECT * FROM category WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("Error while fetching category by ID", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Category.createCategory = (categoryReqData, result) => {
    dbConn.query("INSERT into category SET ?", categoryReqData, (err, res) => {
        if (err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log("Category created successfully");
            result(null, res);
        }
    });
};

Category.updateCategory = (id, categoryReqData, result) => {
    dbConn.query('UPDATE category SET category_name = ? WHERE = ?', [categoryReqData.category_name, id], (err, res) => {
        if (err) {
            console.log('Error while updating the category')
            result(null, err)
        } else {
            console.log('Update category successfully');
            result(null, res)
        }
    });
}

Category.deleteCategory = (id, result) => {
    dbConn.query('DELETE FROM category WHERE id = ?', [id], (err, res) => {
        if(err) {
            console.log('Error while deleting the category');
            result(null, err)
        } else {
            result(null, res)
        }
    });
}

module.exports = Category;
