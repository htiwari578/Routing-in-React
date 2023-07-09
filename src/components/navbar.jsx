import React from 'react';
import {Link} from "react-router-dom";

const NavBar = ()=> {
        return (
            <nav className ="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to ="/" className ="navbar-brand">
                    ListPortal
                </Link>
                <div className = "">
                    <ul className="navbar-nav mr-auto">
                        <li className ="nav-item">
                            <Link className ="nav-link" to="/home">
                                Home
                            </Link>
                        </li>
                        <li className ="nav-item">
                            <Link className ="nav-link" to="/product">
                                Products
                            </Link>
                        </li>
                        <li className ="nav-item">
                            <Link className ="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    

}
export default NavBar;