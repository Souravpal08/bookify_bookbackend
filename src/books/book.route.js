const express = require("express");
const Book = require("./book.model");
const { postABook, getAllBooks,getSingleBook,updateBook,deleteBook } = require("./book.controller");
const router = express.Router();

//post a book

//get all books
router.get("/",getAllBooks)

//get single books
router.get("/:id",getSingleBook)

//update a book

//delete a book


module.exports = router;
