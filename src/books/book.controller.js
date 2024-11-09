const Book = require("./book.model");

//Logic for POST /add-book


//Logic for GET /get-all-books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.error("Error fetching books", error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
};

//Logic for GET /get-single-book
const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      res.status(404).send({ message: "Book not found" });
    }

    return res
      .status(200)
      .send({ message: "Fetched single book successfully", data: book });
  } catch (error) {
    console.error("Failed to fetch book", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

//Logic for PUT /edit-book


//Logic for DELETE /delete-book


module.exports = {
  
  getAllBooks,
  getSingleBook,
 
};
