import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate, useParams } from 'react-router-dom';


const UpdateSup = () => {

const baseUrl="http://localhost/MY_PROJECT_OF_(PMS)/admin/"
    const {id}=useParams()

    const navigation=useNavigate()

    const [supplier, setSupplier]=useState({
        name:"",
        phone:"",
        email:"",
        address:""
    })


    const FetchSupplier = () => {
        axios.get(baseUrl+"/supplier/find/"+id)
          .then((res) => {
            console.log(res.data.supplier);
            setSupplier(res.data.supplier);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      
      useEffect(() => {
        FetchSupplier();
      }, []);
      


const handleChange=(e)=>{
    const {name, value}=e.target

    setSupplier((props)=>({
        ...props,
        [name]:value
    }))
}
 
 

const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post(baseUrl+"/supplier/update/", supplier)
    .then((res)=>{
        console.log(res);
        setSupplier({
            name:"",
            phone:"",
            email:"",
            address:""
        })
        navigation("/")
    })
    .catch((error)=>{
        console.log(error);
        
    })
}



    return (
        
       <> 
<div className="container">
    <div className="row">
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input onChange={handleChange} type="text" value={supplier.name} className="form-control" id="name" name='name' />
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone</label>
    <input onChange={handleChange} type="text" value={supplier.phone} className="form-control" id="phone" name='phone' />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input onChange={handleChange} type="text" value={supplier.email} className="form-control" id="email" name='email' />
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input onChange={handleChange} type="text" value={supplier.address} className="form-control" id="address" name='address' />
  </div>
  <button type="submit" className="btn btn-primary">Update</button>
</form>
    </div>
</div>
      

       </>
    );
};

export default UpdateSup;