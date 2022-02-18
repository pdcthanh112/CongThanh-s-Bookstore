const BookModel = require('../../models/bookModel');

exports.getAllBooks = (req, res) => {
    BookModel.getAllAvailableBooks((err, books) => {
        if (err) res.send(err);
        res.send(books);
    })
};

exports.getBookByID = (req, res) => {
    BookModel.getAvailableBookByID(req.params.id, (err, book) => {
        if(err) res.send(err)
        res.send(book)
    })
};