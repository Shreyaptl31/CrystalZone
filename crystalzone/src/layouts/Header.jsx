import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/CrystalZone_logo.png";

const Header = () => {
    return (
        <Navbar expand="lg" className="crystal-navbar" fixed="top">
            <Container>
                {/* Logo */}
                <Navbar.Brand href="/" className="brand">
                    <div className="logo-wrapper">
                        <img src={logo} alt="CrystalZone" className="logo" />
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Nav Links */}
                    <Nav className="ms-auto nav-links align-items-lg-center">

                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>

                        {/* Crystals Dropdown */}
                        <NavDropdown title="Crystals" id="crystals-dropdown">
                            <NavDropdown.Item href="#crystals/rings">Crystal Bracelets</NavDropdown.Item>
                            <NavDropdown.Item href="#crystals/bracelets">Crystal Tree</NavDropdown.Item>
                            <NavDropdown.Item href="#crystals/raw">crystal pyramid</NavDropdown.Item>
                            <NavDropdown.Item href="#crystals/healing">Selenite Charging Plate</NavDropdown.Item>
                            <NavDropdown.Item href="#crystals/healing">Tumbled Crystal Stone</NavDropdown.Item>
                            <NavDropdown.Item href="#crystals/healing">Crystal Ball</NavDropdown.Item>
                            <NavDropdown.Item href="#crystals/healing">Crystal Bottle</NavDropdown.Item>
                            <NavDropdown.Item href="#crystals/healing">Crystal Face Roller</NavDropdown.Item>
                            <NavDropdown.Item href="#crystals/healing">Himalayan Salt Lamp</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/service">Our Services</Nav.Link>

                        <Nav.Link as={Link} to="/contact">
                            Contact Us
                        </Nav.Link>
                        {/* Search Bar */}
                        <Form className="search-form ms-md-3">
                            <Form.Control
                                type="search"
                                placeholder="Search crystals..."
                                className="search-input"
                            />
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
