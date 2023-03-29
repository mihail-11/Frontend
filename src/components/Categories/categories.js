import React from "react"

const Categories = (props) => {
    return (
        <div className={"row"}>
            <h1>Categories</h1>

            <div className={"table-responsive"}>
                <table className={"table table-striped"}>
                    <thead>
                    <tr>
                        <th scope={"col"}>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.categories.map((cat) => {
                        return (<tr>
                                <td>{cat}</td>
                            </tr>
                        )
                    })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Categories;