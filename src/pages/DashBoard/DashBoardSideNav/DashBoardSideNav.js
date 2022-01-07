import React from 'react';
import { Link } from 'react-router-dom';
import './DashBoardSideNav.css'

const DashBoardSideNav = () => {

    return (
        <div className='d-flex flex-column nav-container'>
            <Link className="nav-item " to="/dashboard/">Dashboard</Link>
            <Link className="nav-item " to="/dashboard/managesProducts">Manages Products</Link>
            <Link className="nav-item" to="/dashboard/users">Customer</Link>
            <Link className="nav-item " to="/dashboard/Category">Category</Link>
            <Link className="nav-item " to="/dashboard/orders">Orders</Link>
            <Link className="nav-item " to="/dashboard/staff">Our Staff</Link>
            <Link className="nav-item " to="/dashboard/setting">Setting</Link>
        </div>
    );
};

export default DashBoardSideNav;