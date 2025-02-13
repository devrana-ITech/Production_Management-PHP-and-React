import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';


const ManageCustomer = () => {
    const baseUrl="http://localhost/MY_PROJECT_OF_(PMS)/admin/"
    const [supplier, setSupplier]=useState([])

    const fetchSupplier=()=>{
        axios.get(baseUrl+"api/customar/")
        .then((res)=>{
            console.log(res);
            setSupplier(res.data.customar)
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }

    useEffect(()=>{
        fetchSupplier()
    },[])

    const deleteData=(id)=>{
        const isConfirm=confirm("Are you sure delete this data")
        if(isConfirm){
            axios.get(baseUrl+"api/customar/delete/" + id)
            .then(res => {
              console.log(res);
              fetchSupplier()
            })
            .catch(err => {
              console.log(err);
      
            })
        }else{
            console.log("Delete operation canceled");
            
        }
      
    }

    return (
        <>
            <main className="container">
  {/*breadcrumb*/}
  <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
    <div className="breadcrumb-title pe-3">CUSTOMER DETAILS</div>
    <div className="ps-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 p-0">
          <li className="breadcrumb-item"><a href="<?php echo $base_url?>/home/index"><i className="bx bx-home-alt" /></a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Customer Details</li>
        </ol>
      </nav>
    </div>
    <div className="ms-auto">
      <div className="btn-group">
        <NavLink to='/createsup'  className="btn btn-primary">Add Customer<i className="bi bi-plus-circle"/></NavLink>
      </div>
    </div>
  </div>
  {/*end breadcrumb*/}
  <div className="card">
    <div className="card-body">
      {/* start search and show button */}
      <div className="row g-3">
        <div className="col-lg-3 col-md-6 me-auto">
          <div className="ms-auto position-relative">
            <div className="position-absolute top-50 translate-middle-y search-icon px-3"><i className="bi bi-search" /></div>
            <input className="form-control ps-5" type="text" placeholder="Search Payment" />
          </div>
        </div>
        <div className="col-lg-2 col-6 col-md-3">
          <select className="form-select">
            <option>Status</option>
            <option>Active</option>
            <option>Disabled</option>
            <option>Pending</option>
            <option>Show All</option>
          </select>
        </div>
        <div className="col-lg-2 col-6 col-md-3">
          <select className="form-select">
            <option>Show 10</option>
            <option>Show 30</option>
            <option>Show 50</option>
          </select>
        </div>
      </div>
    </div>
    <table className='table table-bordered table-striped table-hover align-middle'>
                    <thead className='table-primary'>
                        <tr>
                            <th>Id</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        supplier?.map((data, i)=>{
                            return(
                            <tr key={i}>
                                <td>{data.id}</td>
                                <td>{data.photo && (<img src={baseUrl+"img/customar/"+data.photo} alt="" height={50} width={50} />) }</td>
                                <td>{data.name}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td>{data.address}</td>
                                <td className='btn-group'>
                                    <NavLink to={`show/${data.id}`} className="btn btn-info">Show</NavLink>
                                    <NavLink to={`update/${data.id}`} className="btn btn-primary">Edit</NavLink>
                                    <NavLink onClick={deleteData} className="btn btn-danger">Delete</NavLink>
                                </td>
                            </tr>
                            )
                        }) 
                       }
                    </tbody>
                </table>
  </div>
</main>
        </>
    );
};

export default ManageCustomer;