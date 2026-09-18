import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
export default function Navbar(){

    const { cartItems } = useContext(CartContext); 
    
    const totalItemsCount = cartItems.reduce((total, item) => {
        return total + item.count;
    }, 0);
    
    return <>
        <nav className="navbar  navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home" >
                    <h2 className="ms-2 fw-bolder" >🛒Fresh Cart</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/brands">Brands</Link>
                        </li>
                       <li className="nav-item ms-3 d-flex align-items-center">
                            <Link className="nav-link text-dark fw-semibold d-flex align-items-center gap-2" to="/cart">
                                <span>Cart</span>
                                <div className="position-relative">
                                    <i className="fas fa-shopping-cart fs-4"></i>
                                    <span 
                                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
                                        style={{ fontSize: "10px", padding: "4px 6px" }}
                                    >
                                        {totalItemsCount}
                                    </span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-5 ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}