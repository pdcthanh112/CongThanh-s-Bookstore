const BookModel = require('../../models/bookModel')

exports.getAllBooks = (req, res) => {
    BookModel.getAllBooks((err, books) => {
        if (err) res.send(err);
        res.send(books);
    })
};

exports.getBookByID = (req, res) => {
    BookModel.getBookByID(req.params.id, (err, book) => {
        if(err) res.send(err)
        res.send(book)
    })
};

exports.createNewBook = (req, res) => {
    const bookReqData = new BookModel(req.body)
    if(req.body.contrustor == Object && Object.keys(req.body).length ===0) {
        res.send(400).send({success: false, message: 'Please fill all fields'})
    } else {
        BookModel.createBook(bookReqData, (err, book) => {
            if(err)
                res.send(err);
                res.json({status: true, message: 'Book created successfully', data: book.insertId})
        })
    }
};

exports.updateBook = (req, res) => {
    const bookReqData = new BookModel(req.body)
    if (req.body.contrustor == Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
        BookModel.updateBook(req.params.id, bookReqData, (err, book) => {
            if(err) 
                res.send(err);
                res.json({status: true, message: 'Book updated succesfully'})            
        })
    }
};

exports.deleteBook = (req, res) => {
    BookModel.deleteBook(req.params.id, (err, book) => {
        if(err)
        res.send(err);
        res.json({success: true, message: 'Book deleted succesfully!'})
    })
}