import React from "react";

import { slide as Menu } from "react-burger-menu";

import { Navbar, Nav } from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="primary" variant="primary" className="px-4">
            <Navbar.Brand href="#home" className="text-white nav-logo">
                Maxim Pozdnyakow
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav className="d-none d-md-flex">
                    <Nav.Link href="#home" className="text-white nav-link mx-2">
                        Home
                    </Nav.Link>
                    <Nav.Link
                        href="#portfolio"
                        className="text-white nav-link mx-2"
                    >
                        Portfolio
                    </Nav.Link>
                    <Nav.Link
                        href="#skills"
                        className="text-white nav-link mx-2"
                    >
                        Skills
                    </Nav.Link>
                    <Nav.Link
                        href="#about"
                        className="text-white nav-link mx-2"
                    >
                        About
                    </Nav.Link>
                    <Nav.Link
                        href="#contact"
                        className="text-white nav-link mx-2"
                    >
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Menu right className="d-block d-md-none">
                <a href="#home" className="bm-item-list">
                    Home
                </a>
                <a href="#portfolio" className="bm-item-list">
                    Portfolio
                </a>
                <a href="#skills" className="bm-item-list">
                    Skills
                </a>
                <a href="#about" className="bm-item-list">
                    About
                </a>
                <a href="#contact" className="bm-item-list">
                    Contact
                </a>
            </Menu>
        </Navbar>
    );
}

export default Header;
