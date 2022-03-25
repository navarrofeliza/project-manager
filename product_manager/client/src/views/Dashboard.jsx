// use axios to talk to the backend server
// use useEffect and useState to actually see the info

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import NewProduct from './NewProduct';

const Dashboard = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        axios.get('http://localhost:8001/api/product')
        .then(res => setProducts(res.data))
        .catch(err => console.err(err));
    },[])

    // grab the id from the html and use it to delete the product
    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8001/api/product/${deleteId}`).then(res =>{
            const filteredProducts = products.filter((product) => product._id !== deleteId)
            setProducts(filteredProducts)
        })
        .catch(err => console.log(err))
    }

    return(
        // this will allow the user to see the list of products available
        <div>

            <NewProduct products = {products} setProducts = {setProducts} />
            {
                products?
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th colspan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                products &&
                                products.map((product, i) => (
                                    <tr key={i}>
                                        <><td><Link to={`/product/${product._id}`}>{product.title}</Link></td>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>{product.description}</td>
                                        <td><Link class="btn btn-primary" to={`/product/edit/${product._id}`}>Edit</Link></td>
                                        <td><button class="btn btn-danger" onClick={() => handleDelete(product._id)}>Delete</button></td>
                                        </>
                                    </tr>
                                    ))
                            }
                        </tbody>
                    </table>:
                    <h1>No products available. Please add more</h1>
            }
        </div>
    )
}

export default Dashboard;