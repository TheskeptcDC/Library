import mysql from 'mysql2';


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Library'
}).promise()

// queries to get and  view books 

// function to get all the books from all the data 
async function getBooks() {
    const [rows] = await pool.query("SELECT * FROM books")
    return rows
}
const books = await getBooks();
console.log(books)

// get one book by isbn 
async function getBook(isbn) {
    const bookIsbn = isbn
    const [row] = await pool.query("SELECT * FROM `books` WHERE `isbn` = 'bookIsbn' ")
    return row
}
const book = await getBook(123)
console.log(book)

// get all books from aparticular collection ..specified by the collection id 
async function getBooksBycollectionId(id) {
    const collectionId = id
    const [row] = await pool.query("SELECT * FROM `books` WHERE `collection_id` = 'collectionId' ")
    return row
}

const collection = await getBooksBycollectionId(1)
console.log(collection)
// queries to add books and collections 
async function addBook(name, colId, isbn,about) {
    const status = pool.query("INSERT INTO `books` (name, collection_id, isbn, about) VALUES (`name`, `colId`, `isbn`, `about`)")
}

// await addBook('success',1,4458,'niceRead')
// queries to delete books and queries 