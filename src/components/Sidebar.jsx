import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
    <aside className="sidebar-wrapper" data-simplebar="true">
  <div className="sidebar-header">
    <div>
      <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
    </div>
    <div>
      <h4 className="logo-text">PMS SOFTWARE</h4>
    </div>
    <div className="toggle-icon ms-auto"> <i className="bi bi-list" />
    </div>
  </div>
  {/*navigation*/}
  <ul className="metismenu" id="menu">
    <li> 
    <NavLink to="/dashboard"> 
        <div className="parent-icon"><i className="bi bi-house-filll" />
        </div>
        <div className="menu-title">Dashboard</div>
        </NavLink>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket22-fill" />
        </div>
        <div className="menu-title">User</div>
      </a>
      <ul>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />User List</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket22-fill" />
        </div>
        <div className="menu-title">Supplier</div>
      </a>
      <ul>
        <li> <NavLink to="/managesupplier"><i className="bi bi-circle" />Supplier List</NavLink> 
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket22-fill" />
        </div>
        <div className="menu-title">Customer</div>
      </a>
      <ul>
        <li><NavLink to="/customer"><i className="bi bi-circle" />Customer List</NavLink>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket22-fill" />
        </div>
        <div className="menu-title">Products</div>
      </a>
      <ul>
        <li><NavLink to="/product"><i className="bi bi-circle" />Product List</NavLink>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket22-fill" />
        </div>
        <div className="menu-title">Raw Materials</div>
      </a>
      <ul>
        <li><NavLink to="/createproduction"><i className="bi bi-circle" />Create Product</NavLink> 
        </li>
        <li> <NavLink to="/manageproduction"><i className="bi bi-circle" />Production Details</NavLink>
        </li>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Build Products</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket22-fill" />
        </div>
        <div className="menu-title">Purchase</div>
      </a>
      <ul>
        <li><NavLink to="/purchase"><i className="bi bi-circle" />Purchase Create</NavLink>
        </li>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Purchase Details</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket22-fill" />
        </div>
        <div className="menu-title">Sales</div>
      </a>
      <ul>
        <li><NavLink to="/createsales"><i className="bi bi-circle" />Create Sales</NavLink>
        </li>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Sales Details</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket22-fill" />
        </div>
        <div className="menu-title">Stock</div>
      </a>
      <ul>
        <li> <NavLink to="/managestock"><i className="bi bi-circle" />Stock Product</NavLink> 
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket22-fill" />
        </div>
        <div className="menu-title">Expense</div>
      </a>
      <ul>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Expense</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket22-fill" />
        </div>
        <div className="menu-title">Report</div>
      </a>
      <ul>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Production Report</a>
        </li>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Purchases Report</a>
        </li>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Sales Report</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket22-fill" />
        </div>
        <div className="menu-title">Admin Panel</div>
      </a>
      <ul>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Admin Profile</a>
        </li>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Setting</a>
        </li>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Log Out</a>
        </li>
      </ul>
    </li>

  </ul>
  {/*end navigation*/}
</aside>

        </>
    );
};

export default Sidebar;