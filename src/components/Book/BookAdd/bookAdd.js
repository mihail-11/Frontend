import React from 'react';
import {useNavigate} from 'react-router-dom';

const BookAdd = (props) => {

    const history = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        availableCopies: 0,
        author: -1,
        category:-1
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const availableCopies = formData.availableCopies;
        const category = formData.category;
        const author = formData.author;

        if (category == -1 || author == -1 || name == undefined||name == "" )
            return window.alert("Invalid input")
        props.addBook(name,category,author,availableCopies);
        history("/books");
    }

    return(
        <div className="container mt-5">
            <div className="col-md-5 justify-content-center">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter book name"
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="availableCopies">Available copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder="Available copies"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" required onChange={handleChange}>
                            <option value={"not"}>Not selected</option>
                            {props.categories.map((term) =>
                                <option value={term}>{term}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            <option value={"not"}>Not selected</option>
                            {props.authors.map((term) =>
                                <option value={term.id}>{term.name}</option>
                            )}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary m-4 btn-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BookAdd;
