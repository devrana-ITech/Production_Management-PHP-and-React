import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Cart from './../../cartComponent/Cart';
import { NavLink } from 'react-router-dom';


const CreacteProduction = () => {
    const baseUrl="http://localhost/MY_PROJECT_OF_(PMS)/admin/"
    const cart = Cart('production');
    const [product, setProduct]=useState([])
    const [selectProduct, setSelectProduct]=useState(null)
    const [rowproduct, setRowProduct]=useState([])
    const [uom, setUom]=useState([])

    const [summaryCount, setSummaryCount] = useState({
        tax:0,
        subtotal:0,
        total:0
   })

   const [productionProcess, setProductionProcess]=useState({
      product_id:0,
      uom_id:0,
      products:[],
      qty:0,
      start_date:0,
      end_date:0,
      total_cost:0
   })

   const [item, setItem] = useState({
    product_name:"",
    uom_name:"",
    item_id:0,
    uom_id:0,
    qty:0,
    price:0,
    subtotal: 0
  })


  const [items, setItems] = useState(cart.getCart())


    const handleChangeRowProduct=(e)=>{
      const {name,value}=e.target 
      if (name == "product") {
        let productData = JSON.parse(value)
        setItem((prev) => ({
          ...prev,
          product_name: productData.name,
          item_id: productData.id,
          qty: 0,
          price: productData.offer_price,
          subtotal:productData.offer_price
        }))
      }
      if (name == "qty") {
        setItem((prev) => ({
          ...prev,
          qty: value,
          subtotal: prev.price * value
        }))
      }

      if (name == "uom") {
        let uomData = JSON.parse(value)
        setItem((prev) => ({
          ...prev,
          uom_name: uomData.name,
          uom_id: uomData.id
        }))
      }
      
    }

   
  const handleSetAllItems = (e) => {
    // alert()
    // console.log(item);
    cart.save(item)
     setItems(cart.getCart())
     setItem({
       product_name:"",
       uom_name:"",
       item_id:0,
       uom_id:0,
       qty:0,
       price: 0,
       subtotal: 0
     })
   }

   const calcualtion = () => {
    
    const subtotal = items.reduce((sum, item) => (sum +  parseFloat(item.subtotal)), 0);
    const tax = subtotal * 0.15
    const total= subtotal + tax;

    setSummaryCount({
      vat:tax,
      subtotal:subtotal,
      total:total
    })
   
};



useEffect(() => {
    calcualtion()
  }, [items])


   const handleitemdelete=(id)=>{
    
    cart.deleteItem(id)
    setItems(cart.getCart())
 }
 const handleDeleteAllItems=()=>{
    cart.clearCart()
    setItems(cart.getCart())
 }

    const handleChangeProduct=(e)=>{
        const {value}=e.target 
        setSelectProduct(JSON.parse(value))
        
      }

    // const handleChangeUom=(e)=>{
    //   const {value}=e.target 
    //   setSelectUom(JSON.parse(value))
      
    // }


    const fetchProduct=()=>{
      axios.get(baseUrl+"api/product/")
      .then((res)=>{
        console.log(res);
        setProduct(res.data.product)
        
      })
      .catch((err)=>{
        console.log(err);
        
      })
    }


    const fetchRowProduct=()=>{
      axios.get(baseUrl+"api/product/")
      .then((res)=>{
        console.log(res);
        setRowProduct(res.data.product)
        
      })
      .catch((err)=>{
        console.log(err);
        
      })
    }


    const fetchUom=()=>{
      axios.get(baseUrl+"api/uom/")
      .then((res)=>{
        console.log(res);
        setUom(res.data.uom)
      })
    }

    const handleProcess=()=>{

      const data={
        product_id:selectProduct.id,
        uom_id:item.uom_id,
        products:items,
        qty:productionProcess.qty,
        start_date:productionProcess.start_date,
        end_date:productionProcess.end_date,
        total_cost: parseFloat(summaryCount.total)
      }

      //console.log(data);
      axios.post(baseUrl+"api/Production/processreact/", data)
      .then((res)=>{
        console.log(res);
        cart.clearCart()
        setItems(cart.getCart())
        setSelectProduct(null)
        setUom([]);
      })
      .catch((err)=>{
        console.log(err);
      })
    }


    useEffect(()=>{
        fetchProduct()
        fetchRowProduct()
        fetchUom()
        setItems(cart.getCart())
    },[])



    return (
        <>
<main className="container">
  {/*breadcrumb*/}
  <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
    <div className="breadcrumb-title pe-3">CREATE PRODUCTION</div>
    <div className="ps-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 p-0">
          <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /></a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Create a new Product</li>
        </ol>
      </nav>
    </div>
    <div className="ms-auto">
      <div className="btn-group">
         <NavLink to='/manageproduction'  className="btn btn-primary"><i className="bi bi-arrow-left" />Go Back</NavLink>
      </div>
    </div>
  </div>
  {/*end breadcrumb*/}
  <div className="row">
    <div className="col-xl-11 mx-auto">
      <div className="card">
        <div className="card-body">
          <h6 className="mb-0 text-uppercase">Create a new Product</h6>
          <div className="p-4 border rounded mt-4">
         
          {/* Invoice Details */}
          <div className="row mb-4">
            <div className="col-md-3">
              <h5>Product Name :</h5>
              <select  onChange={handleChangeProduct} className="form-select mb-2" name='product'>
                <option>Select Product</option>
                {
                    product?.map((data,i)=>{
                      if(data.is_raw_material==0){
                        return(
                          <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
                      )
                      }  
                    })
                }
              </select>
              <p className="mb-1"><strong>Product Name : </strong> {selectProduct && selectProduct.name} <span id="phone"></span></p>
            </div>
            <div className="col-md-3">
              <h5>Product Quantity:</h5>
              <input  value={productionProcess.qty}   onChange={(e) => setProductionProcess({ ...productionProcess, qty: e.target.value })} name='qty' type="number" className="form-control" placeholder="Qty" />
            </div>
            <div className="col-md-3">
              <h5>Startind Date :</h5>
              <input  value={productionProcess.start_date} name='start_date'   onChange={(e) => setProductionProcess({ ...productionProcess, start_date: e.target.value })} type="date"  className="form-control mt-1" />
            </div>
            <div className="col-md-3">
              <h5>Ending Date :</h5>
              <input  value={productionProcess.end_date} name='end_date'   onChange={(e) => setProductionProcess({ ...productionProcess, end_date: e.target.value })} type="date"  className="form-control mt-1" />
            </div>
          </div>
          {/* Product Table */}
          <table className="table table-bordered">
            <thead className='table-info'>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>UOM</th>
                <th>Unit Cost</th>
                <th>Total</th>
                <th><button onClick={handleDeleteAllItems} className="btn btn-danger">ClearAll</button></th>
              </tr>
              <tr>
                <td>
                  <select name='product' onChange={handleChangeRowProduct} className="form-select">
                    <option>Select RowMaterial</option>
                    {
                      rowproduct?.map((data,i)=>{
                        if(data.is_raw_material==1){
                          return(
                            <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
                          )
                        }  
                      })
                    }
                  </select>
                </td>
                <td><input value={item.qty} name='qty' onChange={handleChangeRowProduct} type="number" className="form-control" placeholder="Qty" /></td>
                <td> 
                <select onChange={handleChangeRowProduct} className="form-select" name='uom'>
                    <option>Select UOM</option>
                    {
                      uom?.map((data,i)=>{
                        return(
                          <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
                        )
                      })
                    }
                  </select>
                </td>
                <td><input value= {item.price} name='price' type="number" className="form-control" placeholder="Price" /></td>
                <td>{item.subtotal}</td>
                <td>
                  <button onClick={handleSetAllItems} className="btn btn-primary">Add</button>
                  </td>
              </tr>
            </thead>
            <tbody id="data_append">
            {
                items?.map((data, i) => (
                  <tr>
                    <td>{data.product_name}</td>
                    <td>{data.qty}</td>
                    <td>{data.uom_name}</td>
                    <td>{data.price}</td>
                    <td>{data.subtotal}</td>
                    <td> <button onClick={()=>handleitemdelete(data.item_id)} className="btn btn-warning">-</button></td>
                  </tr>
                ))

              }
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="text-end">Subtotal</td>
                <td>
                  {summaryCount.subtotal}</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="4" className="text-end">Vat (15%)</td>
                <td>{summaryCount.vat}</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="4" className="text-end fw-bold">Total Amount</td>
                <td className="fw-bold">{summaryCount.total}</td>
                <td></td>
                </tr>
            </tfoot>
          </table>

          {/* Footer Actions */}
          <div className="d-flex justify-content-end mt-4">
            <button onClick={handleProcess} className="btn btn-success">Process</button>
          </div>
        </div>
          </div>
        </div>
      </div>
      </div>
      </main>

        </>
    );
};

export default CreacteProduction;