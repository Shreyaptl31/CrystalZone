import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/Footer.css";
import logo from "../assets/CrystalZone_logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="crystal-footer py-5">
            <Container>
                <Row className="mb-4">
                    {/* Logo & About */}
                    <Col md={4} className="mb-3 mb-md-0">
                        <img src={logo} alt="CrystalZone" className="footer-logo mb-2" />
                        <p>CrystalZone brings you the finest healing crystals, home decor, and wellness products to elevate your energy and space.</p>
                    </Col>

                    {/* Quick Links */}
                    <Col md={2} className="mb-3 mb-md-0">
                        <h5 className="text-warning">Quick Links</h5>
                        <ul className="footer-links list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </Col>

                    {/* Crystals */}
                    <Col md={3} className="mb-3 mb-md-0">
                        <h5 className="text-warning">Crystals</h5>
                        <ul className="footer-links list-unstyled">
                            <li><a href="#crystals/rings">Crystal Bracelets</a></li>
                            <li><a href="#crystals/bracelets">Crystal Tree</a></li>
                            <li><a href="#crystals/raw">Crystal Pyramid</a></li>
                            <li><a href="#crystals/healing">Crystal Ball</a></li>
                        </ul>
                    </Col>

                    {/* Newsletter */}
                    <Col md={3}>
                        <h5 className="text-warning">Newsletter</h5>
                        <p>Subscribe to get the latest offers and crystal updates.</p>
                        <form className="d-flex">
                            <input type="email" placeholder="Your email" className="footer-input me-2" />
                            <button type="submit" className="footer-btn">Subscribe</button>
                        </form>

                        {/* Social Links */}
                        <div className="social-icons mt-3">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaPinterestP /></a>
                        </div>
                    </Col>
                </Row>

                {/* Footer Bottom */}
                <Row>
                    <Col className="text-center">
                        <small>© {new Date().getFullYear()} CrystalZone. All rights reserved.</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
