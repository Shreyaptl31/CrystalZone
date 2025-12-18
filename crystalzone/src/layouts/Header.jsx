import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../styles/Header.css";
import logo from "../assets/CrystalZone_logo.png";

const Header = () => {
    const navigate = useNavigate();

    // Get logged in user
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    const handleLogout = () => {
        localStorage.removeItem("authUser");
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };

    return (
        <Navbar expand="lg" className="crystal-navbar" fixed="top">
            <Container>
                {/* Logo */}
                <Navbar.Brand as={Link} to="/" className="brand">
                    <div className="logo-wrapper">
                        <img src={logo} alt="CrystalZone" className="logo" />
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-links align-items-lg-center">

                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>

                        {/* Crystals Dropdown */}
                        <NavDropdown title="Crystals" id="crystals-dropdown">
                            <NavDropdown.Item as={Link} to="/products/bracelets">
                                Crystal Bracelets
                            </NavDropdown.Item>
                            <NavDropdown.Item>Crystal Tree</NavDropdown.Item>
                            <NavDropdown.Item>Crystal Pyramid</NavDropdown.Item>
                            <NavDropdown.Item>Selenite Charging Plate</NavDropdown.Item>
                            <NavDropdown.Item>Tumbled Crystal Stone</NavDropdown.Item>
                            <NavDropdown.Item>Crystal Ball</NavDropdown.Item>
                            <NavDropdown.Item>Crystal Bottle</NavDropdown.Item>
                            <NavDropdown.Item>Crystal Face Roller</NavDropdown.Item>
                            <NavDropdown.Item>Himalayan Salt Lamp</NavDropdown.Item>
                            <NavDropdown.Item>Pyrite Stone</NavDropdown.Item>
                            <NavDropdown.Item>Zibu Coin</NavDropdown.Item>
                            <NavDropdown.Item>Crystal Angel</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={Link} to="/service">Our Services</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>

                        {/* Search */}
                        <Form className="search-form ms-md-3 me-3">
                            <Form.Control
                                type="search"
                                placeholder="Search crystals..."
                                className="search-input"
                            />
                        </Form>

                        {/* PROFILE DROPDOWN */}

                        <NavDropdown
                            title={
                                <span className="d-flex align-items-center gap-2 profile-title">
                                    <FaUserCircle size={18} />
                                    {authUser?.name || "Guest"}
                                </span>
                            }
                            id="profile-dropdown"
                            align="end"
                            menuVariant="dark"
                        >



                            {!isLoggedIn ? (
                                <>
                                    <NavDropdown.Item as={Link} to="/login">
                                        Login
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/register">
                                        Register
                                    </NavDropdown.Item>
                                </>
                            ) : (
                                <>
                                    {authUser?.role === "admin" && (
                                        <NavDropdown.Item as={Link} to="/admin/dashboard">
                                            Admin Dashboard
                                        </NavDropdown.Item>
                                    )}

                                    <NavDropdown.Divider />

                                    <NavDropdown.Item onClick={handleLogout}>
                                        Logout
                                    </NavDropdown.Item>
                                </>
                            )}
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
