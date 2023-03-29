import './App.css';
import BookService from "../../repository/BookRepository"
import React from "react";
import Books from "../Book/Books";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Header from "../Navigation/header";
import BookAdd from "../Book/BookAdd/bookAdd";
import 'bootstrap/dist/css/bootstrap.css';
import Categories from "../Categories/categories";
import BookEdit from "../Book/BookEdit/bookEdit";



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            categories: [],
            authors: [],
            selectedBook: {}
        }
    }

    render() {
        return (

            <main>
                <BrowserRouter>

                    <Header/>
                    <Routes>
                        <Route path="/books/edit/:id"

                               element={<BookEdit
                                   categories={this.state.categories}
                                   authors={this.state.authors}
                                   book={this.state.selectedBook}
                                   editBook={this.editBook}/>}
                        />
                        <Route path="/books/add"

                               element={<BookAdd
                                   categories={this.state.categories}
                                   authors={this.state.authors}
                                   addBook={this.addBook}/>}
                        />


                        <Route path="/" element={<Books books={this.state.books} onDelete={this.deleteBook}
                                                        onMark={this.markAsTaken}
                        onEdit={this.loadBookById}/>}/>
                        <Route path="/books" element={<Books books={this.state.books} onDelete={this.deleteBook}
                                                             onMark={this.markAsTaken} onEdit={this.loadBookById} />}/>
                        <Route path="/categories" element={<Categories categories={this.state.categories}/>}/>

                    </Routes>
                </BrowserRouter>
            </main>

        )
    }

    componentDidMount() {
        this.loadBooks();
        this.loadAuthors();
        this.loadCategories();
    }

    loadBooks = () => {
        BookService.fetchAllBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            })
    }
    loadBookById = (id) => {
        BookService.fetchBookById(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }
    loadCategories = () => {
        BookService.fetchAllCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            })
    }
    loadAuthors = () => {
        BookService.fetchAllAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            })
    }
    deleteBook = (id) => {
        BookService.deleteBook(id)
            .then((data) => {
                this.loadBooks()
            })
    }
    addBook = (name, category, authorId, availableCopies) => {
        BookService.addBook(name, category, authorId, availableCopies)
            .then((data) => {
                this.loadBooks()
            })
    }
    editBook = (id,name, category, authorId, availableCopies) => {
        BookService.editBook(id,name,category,authorId,availableCopies)
            .then((data) => {
                this.loadBooks()
            })
    }
    markAsTaken = (id) => {
        BookService.markAsTaken(id)
            .then((data) => {
                this.loadBooks()
            })
    }
    removeTaken = (id) => {
        BookService.unMarkTaken(id)
            .then((data) => {
                this.loadBooks()
            })
    }
}

export default App;
