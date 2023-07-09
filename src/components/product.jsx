import React from 'react';
import {Link}  from "react-router-dom";
import { useParams } from 'react-router-dom';

const Product = ({products,display}) => {
    const {value} =useParams(); 
    let products1=display ? products.filter((pr)=>pr[display]===value) : products;
    
    return (
            <div className ="container">
                <h4>Welcome to the Products Page</h4>
                {products1.map((pr)=> (
                    <div className ="row">
                        <div className = "col-3 border"><Link to={`/products/${pr.id}`}>{pr.id}</Link></div>
                        <div className = "col-3 border"><Link to={`/brand/${pr.brand}`}>{pr.brand}</Link></div>
                        <div className = "col-3 border"><Link to={`/category/${pr.category}`}>{pr.category}</Link></div>
                        <div className = "col-3 border">{pr.product}</div>
                        </div>
                ))}
            </div>
        );
    

}
export default Product;

