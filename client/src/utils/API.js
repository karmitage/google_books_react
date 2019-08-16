import axios from "axios";

export default {
    //get book from google
    getGoogleSearchBooks: function (query) {
        let key = process.env.REACT_APP_API_KEY
        return axios.get("https://www.googleapis.com/books/v1/volumes?key=" + key
            + "&q=" + query + "&maxResults=" + 5)
    },
    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (savedBooks) {
        console.log("hi from inside the post");
        console.log("here are the saved books" + JSON.stringify(savedBooks));
        savedBooks.author = savedBooks.author[0];
        return axios.post("/api/books/", savedBooks);
    }
};
