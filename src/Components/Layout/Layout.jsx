import React from "react"
import Navbar from './../Navbar/Navbar';
import { Outlet } from "react-router-dom";

export default function Layout(){
    return <>
        <Navbar />
        <Outlet/>
        <footer className="py-2">
            <div className=" ms-3">
                <h2 className="fw-bold">Fresh Cart Footer </h2>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div className="container d-flex justify-content-between py-1 ">
                    <input type="email" className="form-control w-75  " placeholder="Email.." />
                    <button className="btn btn-success ms-5 w-25 ">Share App Link</button>
                </div>
            </div> 
            <div className="container d-flex justify-content-between align-items-center border-top border-bottom border-2 border-dark py-5 ">
                <div className="leftpart">
                    <ul className=" list-unstyled d-flex">
                        <li>
                            <h6>Payment Parteners</h6>
                        </li>
                        <li className="ms-2 text-primary">
                            <i className=" fa-brands fa-paypal"></i>
                        </li>
                        <li className="ms-2  text-primary">
                            <i className=" fa-brands fa-cc-amazon-pay"></i>
                        </li>
                        <li className="ms-2  text-primary">
                            <i className=" fa-brands fa-cc-mastercard"></i>
                        </li>
                    </ul>
                </div>

                <div className="rightpart d-flex align-items-center"> 
                    <h6>Get Deliveries with FreshCart</h6>
                    <button className="btn btn-dark mx-3">
                        <i className="fa-brands fa-app-store me-2"></i>
                        <span>Available on App Store</span>
                    </button>
                    <button className="btn btn-dark">
                        <i className="fa-brands fa-google-play me-2"></i>
                        <span>Get it on Google Play</span>
                    </button>
                </div>
             </div>
        </footer>
    </>
}