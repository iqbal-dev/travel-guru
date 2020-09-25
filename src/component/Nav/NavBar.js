import React, { useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./NavBar.css";
import Logo from '../../Image/Logo.png';
import { Link, useHistory } from 'react-router-dom';

const NavBar = () => {
    const history = useHistory();
    const [state, setState] = useState({});
    const handleChange = (event) => {
        setState({ value: event.target.value });
        event.preventDefault();

    }
    const handleHome = () => {
        history.push("/home")
    }
    console.log(state)

    return (
        <Navbar bg="transparent " expand="lg" className="navStyle">
            <Navbar.Brand className="logo" onClick={handleHome}><img className="img" src={Logo} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
                
            <Form  >
              <input className="search" onChange={handleChange} type="search" placeholder="Search your destination" id=""/>
            </Form>
                <Nav className="mr-auto menuName">
                <ul className="ul">
                    <li><Link to ="/news">News</Link></li>
                    <li><Link to ="/destination">Destination</Link></li>
                    <li><Link to = "/blog">Blog</Link></li>
                    <li><Link to = "/contact">Contact</Link></li>
                    <li><Link to = "/login">LogIn</Link></li>
                </ul>
            </Nav>
        </Navbar.Collapse>
</Navbar>
    );
};

export default NavBar;