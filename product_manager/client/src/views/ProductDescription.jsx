import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, Link } from 'react-router-dom'

const ProductDescription = () => {
    const {id} = useParams();
    const {product, setProduct} = useState();

    // new route again
    useEffect(() => {
        axios.get(`http://localhost:8001/api/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => setProduct())
    })

    //visual part. but there's a dumb error!
    return (
        <>
            {
                product?
                    <div>
                        <h4>Title: {product.title}</h4>
                        <h4>Price: {product.price}</h4>
                        <h4>Description: {product.description}</h4>
                    </div>:
        <Link to="/">Back</Link>
            }</>
    )
}

export default ProductDescription;