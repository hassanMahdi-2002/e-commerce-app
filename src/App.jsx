 
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import errImg from './images/error.jpg'
import Cart from "./Components/Cart/Cart";
import Brands from "./Components/Brands/Brands";
import ProDetails from "./Components/ProDetails/ProDetails";
import CartContextProvider from "./Context/CartContext";

export default function App(){
  const router = createBrowserRouter ([
    {path: '' , element: <Layout/>, children: [
      { path: '' , element: <Home/>},
      { path: 'home' , element: <Home/>},
      { path: 'brands' , element: <Brands/>},
      { path: 'prodetails/:id' , element: <ProDetails/>},
      { path: 'cart' , element: <Cart/>},
      { path: 'login' , element: <Login/>},
      { path: 'register' , element: <Register/>},
      { path: '*' , element: <div className=" text-center py-4">
        <img src={errImg} alt="404" />
      </div>},
    ]}
  ])
  return<>

  <CartContextProvider>
        <RouterProvider router={router}/>
  </CartContextProvider>
  </>
} 