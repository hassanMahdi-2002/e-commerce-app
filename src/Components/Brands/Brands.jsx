import { useEffect, useState } from 'react';
import { fakeBrands } from './../dummyData/brands';
import './Brands.css'; 

export default function Brands() {
    const [allBrands, setAllBrands] = useState([]);
    const [isLoadingBrand, setIsLoadingBrand] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAllBrands(fakeBrands);
            setIsLoadingBrand(false);
        }, 1000);
    }, []);

    if (isLoadingBrand) return <h2 className="text-center py-5">Loading Brands Via API...</h2>;

    return <>
    
        <div className='text-center py-4'>
            <h2 className='fw-bold'>This All Brands</h2>
            <p className='lead text-muted'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero?</p>
        </div>
    
        <div className="container py-4">
           
            <div className="row gy-5 justify-content-center text-center">
                {allBrands.map(function(brand) {
                    return (
                        
                        <div key={brand._id} className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <div className="brand-card">
                                <img 
                                    src={brand.image} 
                                    className="w-100 rounded-circle shadow-sm mb-3" 
                                    alt={brand.name} 
                                />
                                <h5 className="text-muted fw-bold">{brand.name}</h5>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </>
 }