import React from "react";
import {Link} from "react-router-dom";


const Navbar = (props) => {
    return (
        <header className="navbar">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/contact">Contact</Link>
        <Link className="link" to="/services">Services</Link>
        </header>
    )
}
export default Navbar;
