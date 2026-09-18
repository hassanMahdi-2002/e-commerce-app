import { useContext, useEffect, useState } from "react"
import { fakeProducts } from "../dummyData/products";
import { CartContext } from "../../Context/CartContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProDetails(){

    const { id } = useParams();

    const[productDetails , setproductDetails] = useState(null);
    const[isLoadingDetails, setIsLoadingDetails] = useState(true);
    const { addToCart } = useContext(CartContext);
    useEffect(()=>{
        const specificProduct = fakeProducts.find((item) => item._id === id);
        setTimeout(() => {
            setproductDetails(specificProduct);
            setIsLoadingDetails(false);
        }, 1000);
    },[id]);
    if(isLoadingDetails) return <h2 className="text-center py-5">Loading the Product...</h2>;
    if (!productDetails) return <h2 className="text-center py-5">Product not found!</h2>;
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <img src={productDetails.imageCover} className="w-100 rounded shadow-sm" alt={productDetails.title} />
                </div>
                <div className="col-md-8">
                    <h2 className="fw-bold">{productDetails.title}</h2>
                    <p className="text-muted lead">{productDetails.description}</p>
                    
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <span className="text-success fw-bold fs-3">{productDetails.price} EGP</span>
                        <span className="badge bg-info p-2 fs-6">Available: {productDetails.quantity} in stock</span>
                    </div>

                    <Link to = "/cart" onClick={() => addToCart(productDetails)}  className="btn btn-success w-100 mt-4 py-2 fw-bold">
        
                        + Add to Cart
        
                        
                    </Link>
                </div>
            </div>
        </div>
    );
}