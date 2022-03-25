import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams()
    console.log(id)
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const history = useHistory()

    // this is gonna be a new route
    useEffect(() => {
        axios.get(`https://localhost:8001/api/product/${id}`)
            .then(res => {
                console.log(res.data)
                const product = res.data
                setTitle(product.title)
                setPrice(product.price)
                setDescription(product.description)
            })
            .catch(err => console.error(err))
        },[])

    // the edit button should work
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8001/api/product/${id}`, {title, price, description})
        .then(res =>
            history.push("/"))
        .catch(err => console.log(err))
    }

    //this is for the delete button on this page
        const handleDelete = () => {
            axios.delete(`http://localhost:8001/api/product/${id}`)
            .then(res =>
                history.push("/"))
            .catch(err => console.log(err))
        }

    // the actual visual part of the form
    return (
        <div>
            { title && 
                <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input type="text" name="title" value={title}
              onChange={e => setTitle(e.target.value)} className="form-control" />
          </div>
          <div>
            <label>Price</label>
            <input type="number" name="price" value={price}
              onChange={e => setPrice(e.target.value)} className="form-control" />
          </div>
          <div>
            <label>Description</label>
            <input type="text" name="salary" value={description}
              onChange={e => setDescription(e.target.value)} className="form-control" />
          </div>
          <button className='btn btn-primary btn-block'>Update</button>
        </form>
        }
        <button className="btn btn-danger btn-block" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default EditProduct;