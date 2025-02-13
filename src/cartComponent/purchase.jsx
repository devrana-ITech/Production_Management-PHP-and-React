import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Invoice.css'; // Assuming the provided CSS is saved here.
import Cart from './Cart';



const Purchase = () => {
    const cart = Cart('purchase');

    const baseUrl = "http://localhost/project/admin";


    const [products, setProducts] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [warehouses, setWarehouses] = useState([]);
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    
    const [cartItems, setCartItems] = useState(cart.getCart());

    const [totals, setTotals] = useState({ subtotal: 0, discount: 0, tax: 0, netTotal: 0 });
    const [item, setItem] = useState({
        name: "",
        item_id: "",
        price: "",
        qty: 1,
        discount: "",
        total_discount: "",
        subtotal: ""
    })

    const [UninPrice, setUninPrice] = useState(null)
    const subtotal = useRef()

    useEffect(() => {
        axios.get(baseUrl + '/api/supplier').then((res) => {
            setSuppliers(res.data.suppliers)

            // console.log(res.data.suppliers);

        });
        axios.get(baseUrl + '/api/product').then((res) => {
            setProducts(res.data.products)
            //console.log(res.data.products);


        });
        axios.get(baseUrl + '/api/warehouse').then((res) => {
            setWarehouses(res.data.warehouses)
            //console.log(res.data);

        });
    }, []);

    useEffect(() => {
        calculateTotals();
    }, [cartItems]);

    const handleAddItem = () => {
         console.log(item);
         
        cart.save(item);
        setCartItems(cart.getCart());
        setItem({
            name: "",
            item_id: "",
            price: "",
            qty: "",
            discount: "",
            total_discount: "",
            subtotal: ""
        })
    };

    const handleDeleteItem = (id) => {
        cart.deleteItem(id);
        setCartItems(cart.getCart());
    };

    const handleClearCart = () => {
        cart.clearCart();
        setCartItems([]);
    };

    const calculateTotals = () => {
        const subtotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
        const discount = cartItems.reduce((sum, item) => sum + item.discount, 0);
        const tax = subtotal * 0.05;
        const netTotal = subtotal + tax;

        setTotals({ subtotal, discount, tax, netTotal });
    };

    const handleProcessOrder = () => {
        const data = {
            warehouse_id: warehouses[0]?.id, // Replace with selected warehouse
            supplier_id: selectedSupplier?.id,
            purchase_date: new Date().toISOString(),
            delivery_date: new Date().toISOString(),
            discount: totals.discount,
            tax: totals.tax,
            purchase_total: totals.netTotal,
            products: cartItems,
        };

        console.log(data);
        

        axios.post(baseUrl + '/api/process/save', data).then(() => {
            handleClearCart();
            alert('Order processed successfully!');
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target

        var selectedProduct = ""
        if (name == "product") {
            selectedProduct = products.find((s) => (s.id == value));
            setUninPrice(selectedProduct.offer_price);
            
            
            setItem((prev) => ({
                ...prev,
                price: selectedProduct.offer_price,
                qty: 1,
                name: selectedProduct.name,
                item_id: selectedProduct.id,
            }));
        }

        if (name == "qty") {

          
            let qty = parseFloat(value)
            setItem((prev) => ({
                ...prev,
                qty: value,
                discount:0,
                total_discount:0,
                subtotal:  prev.price * qty ,
            }));
        }
        if (name == "discount") {
            setItem((prev) => ({
                ...prev,
                discount:parseFloat(value),
                total_discount:parseFloat(value * prev.qty),
                subtotal:(prev.price * prev.qty) - (value * prev.qty)  ,
            }));
        }

    }

    return (
        <div className="invoice-container">
            <div className="header">
                <span>&amp;</span> INVOICE
            </div>

            <div className="details">
                <div>
                    <label>Supplier</label>
                    <select
                        onChange={(e) => {
                            const value = +e.target.value; // Convert to a number immediately
                            const selected = suppliers.find((s) => (
                                s.id == value));
                            setSelectedSupplier(selected); // Set the selected supplier
                        }}
                    >
                        {suppliers.map((s) => (
                            <option key={s.id} value={s.id}>
                                {s.name}
                            </option>
                        ))}
                    </select>

                    {selectedSupplier && (
                        <div>
                            <p>Phone: {selectedSupplier.mobile}</p>
                            <p>Email: {selectedSupplier.email}</p>
                        </div>
                    )}





                </div>

                <div>
                    <label>Warehouse</label>
                    <select>
                        {warehouses.map((w) => (
                            <option key={w.id} value={w.id}>
                                {w.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Discount</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <th>
                            <select name='product'
                                onChange={handleChange}
                            >
                                {products && products.map((s) => (
                                    <option key={s.id} value={s.id}>
                                        {s.name}
                                    </option>
                                ))}
                            </select>
                        </th>
                        <th><input value={item.qty} type="text" name='qty' onChange={handleChange} /> </th>
                        <th><input value={UninPrice | ""} type="text" name='uninPrice' onChange={handleChange} /> </th>
                        <th><input value={item.discount} type="text" name='discount' onChange={handleChange} /></th>
                        <th></th>
                        <th> <button  className="btn btn-primary" onClick={()=> handleAddItem()}>+</button></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.item_id}>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                            <td>{item.discount}</td>
                            <td>{item.subtotal}</td>
                            <td>
                                <button onClick={() => handleDeleteItem(item.item_id)}>-</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">Subtotal</td>
                        <td>{totals.subtotal}</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Discount</td>
                        <td>{totals.discount}</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Tax</td>
                        <td>{totals.tax}</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Total</td>
                        <td>{totals.netTotal}</td>
                    </tr>
                </tfoot>
            </table>

            <button onClick={handleClearCart}>Clear All</button>
            <button onClick={handleProcessOrder}>Process Order</button>
        </div>
    );
};

export default Purchase;