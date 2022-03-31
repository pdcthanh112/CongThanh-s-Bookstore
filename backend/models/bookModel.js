const dbConn = require("../config/dbConfig");

var Book = function (book) {
    this.id = book.id;
    this.book_name = book.book_name;
    this.category = book.category;
    this.sub_category = book.sub_category;
    this.author = book.author;
    this.quantity = book.quantity;
    this.price = book.price;
    this.create_date = getDate();
    this.update_date = getDate();
};

var getDate = () => {
    let date = new Date();
    return (date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
};

// ** ADMIN FUNCTION **
//Get all Book - ADMIN
Book.getAllBooks = (result) => {
    dbConn.query("SELECT * FROM book", (err, res) => {
        if (err) {
            console.log("Error while fetching book", err);
            result(null, err);
        } else {
            console.log("Book fetching successfully");
            result(null, res);
        }
    });
};

//Get Book by ID - ADMIN
Book.getBookByID = (id, result) => {
    dbConn.query("SELECT * FROM book WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("Error while fetching book by ID", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

//Create a new Book - ADMIN
Book.createBook = (bookReqData, result) => {
    dbConn.query("INSERT into book SET ?", [bookReqData], (err, res) => {
        if (err) {
            console.log("Error while inserting data");
            result(null, err);
        } else {
            console.log("Book created successfully");
            result(null, res);
        }
    });
};

//Update a Book - ADMIN
Book.updateBook = (id, bookReqData, result) => {
    dbConn.query("UPDATE book SET book_name = ?, category = ?, sub_category = ?, author = ?, quantity = ?, price = ?, update_date = ?, image = ?, status = ? WHERE = ?",
        [bookReqData.book_name, bookReqData.category, bookReqData.sub_category, bookReqData.author, bookReqData.quantity, bookReqData.price, getDate(), bookReqData.image, bookReqData.status, id], (err, res) => {
            if (err) {
                console.log("Error while updating the book");
                result(null, err);
            } else {
                console.log("Update book successfully");
                result(null, res);
            }
        }
    );
};

//Remove a Book - ADMIN
Book.deleteBook = (id, result) => {
    dbConn.query("DELETE FROM book WHERE id = ?", [id], (err, res) => {
        if (err) {
            console.log("Error while deleting the book");
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
// ** USER FUNCTION **

//Get all Book - USER
Book.getAllAvailableBooks = (pagination, result) => {
    dbConn.query("SELECT id, book_name, category, sub_category, author, quantity, price, series, publisher, country, image FROM bookstore.book WHERE status = 2 LIMIT ? OFFSET ?", [pagination.limit, pagination.offset], (err, res) => {
        if (err) {
            console.log("Error while fetching book", err);
            result(null, err);
        } else {
            console.log("Book fetching successfully");
            result(null, res);
        }
    }
    );
};

//Get Book by ID - USER
Book.getAvailableBookByID = (id, result) => {
    dbConn.query("SELECT book_name, category, sub_category, author, quantity, price, series, publisher, country, image FROM book WHERE id = ? AND status = 2", id, (err, res) => {
        if (err) {
            console.log("Error while fetching book by ID", err);
            result(null, err);
        } else {
            result(null, res);
        }
    }
    );
};

// Get book by categoryID - USER
Book.getAllAvailableBookByCategory = (id, pagination, result) => {
    dbConn.query("SELECT book_name, category, sub_category, author, quantity, price, series, publisher, country, image FROM book WHERE category = ? AND status = 2", [id], (err, res) => {
        if (err) {
            console.log("Error while fetching book by ID", err);
            result(null, err);
        } else {
            result(null, res);
        }
    }
    );
};

// Get book by subcategoryID - USER
Book.getAllAvailableBookBySubCategory = (id, pagination, result) => {
    dbConn.query("SELECT book_name, category, sub_category, author, quantity, price, series, publisher, country, image FROM book WHERE sub_category = ?AND status = 2", [id], (err, res) => {
        if (err) {
            console.log("Error while fetching book by ID", err);
            result(null, err);
        } else {
            result(null, res);
        }
    }
    );
};

module.exports = Book;
