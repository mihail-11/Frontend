import React from 'react';
import ReactPaginate from 'react-paginate'
import BookTerm from '../Book/BookTerm.js';
import {Link} from 'react-router-dom';



// const books = (props) => {
//     return (<div className={"container mm-4 mt-5"}>
//         <div className={"row"}>
//             <div className={"table-responsive"}>
//                 <table className={"table table-striped"}>
//                     <thead>
//                     <tr>
//                         <th scope={"col"}>Name</th>
//                         <th scope={"col"}>Category</th>
//                         <th scope={"col"}>Author</th>
//                         <th scope={"col"}>Available Copies</th>
//                         <th scope={"col"}></th>
//
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {props.books.map((book) => {
//                         return (<tr>
//                                 <td>{book.name}</td>
//                                 <td>{book.category}</td>
//                                 <td>{book.author.name} {book.author.surname}</td>
//                                 <td>{book.availableCopies}</td>
//                                 <td>
//                                     <Link className={"btn btn-primary m-2"}
//                                           onClick={() => props.onEdit(book.id)}
//                                           to={`/books/edit/${book.id}`}>
//                                         Edit
//                                     </Link>
//
//                                     <button className={"btn btn-primary m-2"}
//                                             onClick={() => props.onDelete(book.id)}>Delete
//                                     </button>
//                                     <button className={"btn btn-primary m-2"} onClick={() => props.onMark(book.id)}>Mark
//                                         as taken
//                                     </button>
//                                 </td>
//                             </tr>);
//                     })}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//             <div className={"row"}>
//                 <Link to={"/books/add"} className={"btn btn-primary ml-2"}>Add new Book</Link>
//             </div>
//
//     </div>
// )
//
// }
// export default books;


class Books extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getProductsPage(offset, nextPageOffset);

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Available copies</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Category</th>
                            </tr>
                            </thead>
                            <tbody>
                            {books}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add new book</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               breakClassName={'page-item'}
                               breakLinkClassName={'page-link'}
                               pageClassName={'page-item'}
                               pageLinkClassName={'page-link'}
                               previousClassName={'page-item'}
                               previousLinkClassName={'page-link'}
                               nextClassName={'page-item'}
                               nextLinkClassName={'page-link'}
                               activeClassName={'active'}/>
            </div>
    )
    }
    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    getProductsPage = (offset, nextPageOffset) => {
        return this.props.books.map((term, index) => {
            return (
                <BookTerm term={term} onMark={this.props.onMark} onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>
            );
        }).filter((product, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}
export default Books;