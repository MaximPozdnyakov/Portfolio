import React from "react";

import { Navbar, Nav } from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="primary" variant="primary" className="px-4">
            <Navbar.Brand href="#home" className="text-white nav-logo">
                Maxim Pozdnyakow
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end ">
                <Nav>
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
                        href="#about"
                        className="text-white nav-link mx-2"
                    >
                        About
                    </Nav.Link>
                    <Nav.Link
                        href="#skills"
                        className="text-white nav-link mx-2"
                    >
                        Skills
                    </Nav.Link>
                    <Nav.Link
                        href="#contact"
                        className="text-white nav-link mx-2"
                    >
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
