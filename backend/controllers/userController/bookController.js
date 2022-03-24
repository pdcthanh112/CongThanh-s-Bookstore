const BookModel = require('../../models/bookModel');

exports.getAllBooks = (req, res) => {

    const {_page, _size} = req.query;
    const pagination = ({
        limit: parseInt(_size), 
        offset: parseInt(_page) * parseInt(_size) - parseInt(_size)
    })
    
    if (req.query.category !== undefined) {
        BookModel.getAllAvailableBookByCategory(req.query.category, pagination, (err, books) => {
            if (err) res.send(err);
            res.send(books);
        })
    } else if (req.query.subcategory !== undefined) {
        BookModel.getAllAvailableBookBySubCategory(req.query.subcategory, pagination, (err, books) => {
            if (err) res.send(err);
            res.send(books);
        })
    } else {
        BookModel.getAllAvailableBooks(pagination, (err, books) => {
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