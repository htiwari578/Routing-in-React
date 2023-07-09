
import React from 'react';
import { useParams } from 'react-router-dom';

const Products = ({products}) => {
    
    const {id} =useParams(); 
    // const {products} = this.props;
    let product = products.find((pr)=> pr.id === id); 
    return ( 
        <div className = "conatiner fw-bold">
            Product Id : {id}<br/>
            Brand : {product.brand}<br/>
            Category : {product.category}<br/>
            Name: {product.product}<br/>
        </div>
    );

}

export default Products;