const BookModel = require('../../models/bookModel');

exports.getAllBooks = (req, res) => {

    if (req.query.category !== undefined) {
        BookModel.getAllAvailableBookByCategory(req.query.category, (err, books) => {
            if (err) res.send(err);
            res.send(books);
        })
    } else if (req.query.subcategory !== undefined) {
        BookModel.getAllAvailableBookBySubCategory(req.query.subcategory, (err, books) => {
            if (err) res.send(err);
            res.send(books);
        })
    } else {
        BookModel.getAllAvailableBooks((err, books) => {
            if (err) res.send(err);
            res.send(books);
        })
    }
};

exports.getBookByID = (req, res) => {
    BookModel.getAvailableBookByID(req.params.id, (err, book) => {
        if (err) res.send(err)
        res.send(book)
    })
};

exports.getAllAvailableBookByCategory = (req, res) => {
    BookModel.getAllAvailableBookByCategory((err, books) => {
        if (err) res.send(err);
        res.send(books);
    })
};