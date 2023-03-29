import React from 'react';
import {useNavigate} from 'react-router-dom';

const ProductEdit = (props) => {

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
        const name = formData.name !== "" ? formData.name : props.book.name;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;
        const category = formData.category !== -1 ? formData.category : props.book.category;
        const author = formData.author !== -1 ? formData.author : props.book.author.id;

        console.log(author)
        props.editBook(props.book.id, name, category, author,availableCopies);
        history("/books");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5 justify-content-center">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.book.name}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.book.availableCopies}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            <option value={"not"}>Not selected</option>

                            {props.categories.map((term) => {
                                if(props.book.category !== undefined &&
                                    props.book.category === term)
                                    return <option selected={props.book.category} value={term}>{term}</option>
                                else return <option value={term}>{term}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Manufacturer</label>
                        <select name="manufacturer" className="form-control" onChange={handleChange}>
                            <option value={"not"}>Not selected</option>

                            {props.authors.map((a) => {
                                if(props.book.author !== undefined &&
                                    props.book.author.id === a.id)
                                    return <option selected={props.book.author.id} value={a.id}>{a.name}</option>
                                else return <option value={a.id}>{a.name}</option>
                            })}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ProductEdit;
