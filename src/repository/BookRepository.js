
import axios from "../custom-axios/axios";

const BookService = {
    fetchAllBooks: () => {
        return  axios.get("/books")
    },
    fetchBookById: (id) => {
        return axios.get(`/books/${id}`)
    },
    addBook: (name,category,authorId,availableCopies) => {
        return axios.post("/books/add",{
            "name":name,
            "category":category,
            "authorId":authorId,
            "availableCopies":availableCopies
        })
    },
    editBook:(id,name,category,authorId,availableCopies) =>{
        console.log(category)
        return axios.put(`/books/${id}/edit`,{
            "name":name,
            "category":category,
            "authorId":authorId,
            "availableCopies":availableCopies
        })
    },
    deleteBook:(id) => {
        return axios.delete(`/books/${id}/delete`)
    },

    markAsTaken: (id) => {
        return axios.get(`/books/mark/${id}`)

    },
    unMarkTaken: (id) => {
        return axios.get(`/books/unmark/${id}`)
    },
    fetchAllCategories:() => {
        return axios.get("/categories")
    },
    fetchAllAuthors: () => {
        return axios.get("/authors")
    }
}
export default BookService