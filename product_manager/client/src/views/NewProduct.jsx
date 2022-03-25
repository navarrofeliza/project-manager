import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

const NewProduct = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState([]);
    // const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8001/api/product/new`, {title, price, description})
        .then(res =>  {
            console.log(res.data);
            props.setProducts([...props.products, res.data])
        }
        )
        .catch(err => {
            const errorResponse = err.response.data.errors
            console.log(errorResponse)
            let errArr = []
            for(const key of Object.keys(errorResponse)){
                errArr.push(errorResponse[key].message)
            }
            setError(errArr)
        })
    }

    const clearForm = () =>{
        setTitle("")
        setPrice("")
        setDescription("")
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label> Title</label>
            <input type="text" name="title" value={title}
              onChange={e=>setTitle(e.target.value)} className="form-control"/>
          </div>
          <div>
            <label> Price</label>
            <input type="number" name="Price" value={price}
              onChange={e=>setPrice(e.target.value)} className="form-control"/>
          </div>
          <div>
            <label> Description</label>
            <input type="text" name="Description" value={description}
              onChange={e=>setDescription(e.target.value)} className="form-control"/>
          </div>
          <button className='btn btn-primary btn-block'> Add a new Product!</button>
          <button type="button" className = 'btn btn-default btn-block' onClick={clearForm}> Cancel</button>
        </form>
        {
          error.map((err, i)=>(
            <p style={{color:"red"}} key={i}> {err}</p>
          ))
        }
      </div>
    )
  }
export default NewProduct;