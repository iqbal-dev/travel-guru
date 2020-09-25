import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "../Nav/NavBar.css";
import "./NavBars.css"
import Logo from '../../Image/Logo.png';
import { Link } from 'react-router-dom';

const NavBars = () => {

    return (
        <Navbar bg="transparent " expand="lg" className="navStyle">
            <Navbar.Brand className="logo" href="#home"><img src={Logo} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
                
            <Form className="search"  >
            </Form>
                <Nav className="mr-auto menuName">
                <ul>
                    <li><Link to ="/news">News</Link></li>
                    <li><Link to ="/destination">Destination</Link></li>
                    <li><Link to = "/blog">Blog</Link></li>
                    <li><Link to = "/contact">Contact</Link></li>
                    <li><Link to = "/login2">LogIn</Link></li>
                </ul>
            </Nav>
        </Navbar.Collapse>
</Navbar>
    );
};

export default NavBars;