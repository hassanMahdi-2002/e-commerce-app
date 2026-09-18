import { useEffect, useState } from "react";
import { fakeProducts } from "../dummyData/products";
import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAllProducts(fakeProducts);
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) return <h2 className="text-center py-5">Loading Products Via API...</h2>;
    
    return (
        <div className="container py-5">
            <div className="row g-4">
                {allProducts.map(function(product) {
                    return (
                        <div key={product._id} className=" col-sm-6 col-md-3 col-lg-2"> 
                            <div className="item p-3 shadow-sm rounded product-card bg-white h-100 d-flex flex-column">
                                
                                
                                <Link to={`/prodetails/${product._id}`} className="text-decoration-none" >
                                
                                
                                <div className="overflow-hidden rounded">
                                    <img 
                                        src={product.imageCover} 
                                        className="w-100"  
                                        style={{ height: "250px", objectFit: "cover" }}  
                                        alt={product.title} 
                                    />
                                </div>
                                <h4 className="h6 mt-3 text-truncate">{product.title}</h4>
                                <p className="text-success fw-bold mb-1">{product.category.name}</p>
                                
                                <div className="d-flex justify-content-between align-items-center mt-auto pt-2">
                                    <span className="fw-bold">{product.price} EGP</span>
                                    <span><i className="fas fa-star text-warning"></i> {product.ratingsAverage}</span>
                                </div>
                                </Link>
                        
                                {/* <Link to="/Cart" className="btn btn-sm btn-outline-success w-100 mt-3 d-block">
                                    <span>+ Add to Cart</span>
                                </Link> */}
                                
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}