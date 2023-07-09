import React from 'react';
import Product from './product';
import Home from './home';
import { Route, Routes, Navigate } from 'react-router-dom';
import Contact from './contact';
import Products from './products';

import NavBar from './navbar';

const MyComponent = () => {
  const products = [
    {
      id: "A101",
      brand: "Pespsi",
      category: "Beverages",
      product: "Pepsi 300ml",
    },
    {
      id: "A45",
      brand: "Coke",
      category: "Beverages",
      product: "Diet Coke 300ml",
    },
    {
      id: "A101",
      brand: "Pespsi",
      category: "Beverages",
      product: "Pepsi 300ml",
    },
    {
      id: "A144",
      brand: "Maggi",
      category: "Foods",
      product: "Maggi 300ml",
    },
    {
      id: "A665",
      brand: "Red Bull",
      category: "Beverages",
      product: "RedBull 300ml",
    },
    {
        id: "A775",
        brand: "Dairy Milk",
        category: "Choclates",
        product: "45gm",
      },
      {
        id: "B775",
        brand: "Kit Kat",
        category: "Choclates",
        product: "25gm",
      },
  ];

  const contact = {
    email: "mail@portal.com",
    address: "402, 7th floor, pune",
  };

  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path ="/products/:id" element = {<Products products={products}/>} />
        <Route path="/brand/:value" element = {<Product products={products} display="brand"/>} />
        <Route path="/category/:value" element = {<Product products={products} display="category"/>} />


        <Route path="/home" element={<Home />} />
        
         <Route path="/contact" element={<Contact email={contact.email} address={contact.address} />} />
        <Route path="/product" element={<Product products={products} />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
};

export default MyComponent;