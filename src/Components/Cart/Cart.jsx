import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext'; 

export default function Cart() {
    
    const { cartItems, removeItem, updateItemCount } = useContext(CartContext);
    const totalPrice = cartItems.reduce((total, item) => {
        return total + (item.price * item.count);
    }, 0);
    if (cartItems.length === 0) {
        return (
            <div className="container py-5 text-center mt-5">
                <i className="fas fa-shopping-cart text-muted mb-3" style={{ fontSize: "80px" }}></i>
                <h2 className="fw-bold mb-4">Your Cart is Empty!</h2>
                <Link to="/home" className="btn btn-success fw-bold px-4 py-2">
                    Start Shopping Now
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h2 className="fw-bold mb-4">Shopping Cart</h2>

            <div className="row g-4">
               
                <div className="col-lg-8">
                    {cartItems.map((item) => (
                        <div key={item._id} className="row align-items-center bg-light shadow-sm rounded p-3 mb-3 mx-0">
                            
                            <div className="col-md-2 col-4">
                                <img src={item.imageCover} className="w-100 rounded" alt={item.title} style={{ height: "80px", objectFit: "cover" }} />
                            </div>
                            
                            <div className="col-md-4 col-8">
                                <h5 className="fw-bold mb-1">{item.title}</h5>
                                <p className="text-success fw-bold mb-0">{item.price} EGP</p>
                            </div>
                            
                            <div className="col-md-4 col-8 mt-3 mt-md-0 d-flex align-items-center justify-content-md-center">
                                <button 
                                    onClick={() => updateItemCount(item._id, item.count - 1)} 
                                    className="btn btn-outline-success btn-sm px-3 fw-bold">
                                    -
                                </button>
                                
                                <span className="mx-3 fw-bold fs-5">{item.count}</span>
                                
                                <button 
                                    onClick={() => updateItemCount(item._id, item.count + 1)} 
                                    className="btn btn-outline-success btn-sm px-3 fw-bold">
                                    +
                                </button>
                            </div>
                            
                           
                            <div className="col-md-2 col-4 mt-3 mt-md-0 text-end">
                                <button 
                                    onClick={() => removeItem(item._id)} 
                                    className="btn btn-outline-danger btn-sm">
                                    <i className="fas fa-trash-alt"></i> Remove
                                </button>
                            </div>
                            
                        </div>
                    ))}
                </div>

                
                <div className="col-lg-4">
                    <div className="bg-light shadow-sm rounded p-4">
                        <h4 className="fw-bold mb-4">Order Summary</h4>
                        
                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Subtotal</span>
                            <span className="fw-bold">{totalPrice} EGP</span>
                        </div>
                        
                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Shipping Estimate</span>
                            <span className="fw-bold">150 EGP</span>
                        </div>
                        
                        <hr />
                        
                        <div className="d-flex justify-content-between mb-4">
                            <span className="fw-bold fs-5">Total</span>
                            <span className="fw-bold fs-5 text-success">{totalPrice + 150} EGP</span>
                        </div>
                        
                        <button className="btn btn-success w-100 py-2 fw-bold">
                            Proceed to Checkout
                        </button>
                        
                        <Link to="/home" className="btn btn-outline-secondary w-100 py-2 mt-2 fw-bold">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}