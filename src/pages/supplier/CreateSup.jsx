import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';



const CreateSup = () => {
const baseUrl="http://localhost/MY_PROJECT_OF_(PMS)/admin/"
const navigation=useNavigate()
    const [supplier, setSupplier]=useState({
        name:"",
        phone:"",
        email:"",
        address:"",
        photo:""
    })

const handleChange=(e)=>{
    const {name, value, type, files}=e.target

    if(type == "file"){
      setSupplier((props)=>({
        ...props,
        [name]:files[0]
    }))



    }else{
      setSupplier((props)=>({
        ...props,
        [name]:value
    }))
    }
}
 
 

const handleSubmit=(e)=>{
    e.preventDefault();

    const supFormData = new FormData();
    supFormData.append("name", supplier.name)
    supFormData.append("phone", supplier.phone)
    supFormData.append("email", supplier.email)
    supFormData.append("address", supplier.address)
    supFormData.append("photo", supplier.photo)



    axios.post(baseUrl+"supplier/save", supFormData)
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
<main className="container">
  {/*breadcrumb*/}
  <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
    <div className="breadcrumb-title pe-3">CREATE SUPPLIERS</div>
    <div className="ps-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 p-0">
          <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /></a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Add a new Suppliers</li>
        </ol>
      </nav>
    </div>
    <div className="ms-auto">
      <div className="btn-group">
         <NavLink to='/managesupplier'  className="btn btn-primary"><i className="bi bi-arrow-left" />Go Back</NavLink>
      </div>
    </div>
  </div>
  {/*end breadcrumb*/}
  <div className="row">
    <div className="col-xl-11 mx-auto">
      <div className="card">
        <div className="card-body">
          <h6 className="mb-0 text-uppercase">Add a new Suppliers</h6>
          <div className="p-4 border rounded mt-4">
          <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input onChange={handleChange} type="text" className="form-control" id="name" name='name' />
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone</label>
    <input onChange={handleChange} type="text" className="form-control" id="phone" name='phone' />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input onChange={handleChange} type="text" className="form-control" id="email" name='email' />
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input onChange={handleChange} type="text" className="form-control" id="address" name='address' />
  </div>
  <div className="mb-3">
    <label htmlFor="photo" className="form-label">Photo</label>
    <input onChange={handleChange} type="file" className="form-control" id="photo" name='photo' />
  </div>
  <button type="submit" className="btn btn-primary"><i class="bi bi-save"></i> Save Suppliers</button>
</form>
          </div>
        </div>
      </div>
      </div>
      </div>
      </main>

       </>
    );
};

export default CreateSup;